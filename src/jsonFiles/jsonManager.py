import json
import os
import ftfy

def load_id_count():
    with open("public/jsonFiles/idCount.txt", 'r') as file:
        return int(file.read())

def save_id_count(id_count):
    with open("public/jsonFiles/idCount.txt", 'w') as file:
        file.write(str(id_count))

def update_quiz_files():
    id_count = load_id_count()
    
    for count in range(1, 6):
        file_path = f"src/jsonFiles/quiz{count}.json"
        
        if not os.path.exists(file_path):
            print(f"Archivo no encontrado: {file_path}")
            continue
        
        with open(file_path, 'r') as file:
            quiz_data = json.load(file)
        
        for question in quiz_data.get('vf', []):
            if "id" not in question:
                question["id"] = id_count
                id_count += 1
        
        for question in quiz_data.get('alt', []):
            if "id" not in question:
                question["id"] = id_count
                id_count += 1
            if "intAnswers" not in question:
                question["intAnswers"] = 4
        
        with open(file_path, 'w') as file:
            json.dump(quiz_data, file, indent=4)
        
        print(f"Actualizado: {file_path}")
    
    save_id_count(id_count)
    print("Todos los archivos han sido actualizados.")



def fix_unicode():
    for count in range(1, 6):
        file_path = f"quiz{count}.json"

        if not os.path.exists(file_path):
            print(f"Archivo no encontrado: {file_path}")
            continue

        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                quiz_data = json.load(file)
        except json.JSONDecodeError as e:
            print(f"❌ Error al leer {file_path}: {e}")
            continue

        def fix_text(text, field_name, question_index):
            """Corrige el texto mal codificado usando ftfy y maneja errores."""
            if not isinstance(text, str):
                print(f"⚠️ Advertencia: '{field_name}' en pregunta {question_index} no es una cadena de texto.")
                return text  # Devuelve el valor original si no es una cadena
            
            fixed_text = ftfy.fix_text(text)
            
            if fixed_text != text:
                print(f"🔧 Corregido '{field_name}' en pregunta {question_index}")
            
            return fixed_text

        # Procesar preguntas de Verdadero/Falso
        for idx, question in enumerate(quiz_data.get('vf', [])):
            if "pregunta" in question:
                question["pregunta"] = fix_text(question["pregunta"], "pregunta", idx)
            if "referencia" in question:
                question["referencia"] = fix_text(question["referencia"], "referencia", idx)

        # Procesar preguntas de Alternativas
        for idx, question in enumerate(quiz_data.get('alt', [])):
            if "pregunta" in question:
                question["pregunta"] = fix_text(question["pregunta"], "pregunta", idx)
            if "referencia" in question:
                question["referencia"] = fix_text(question["referencia"], "referencia", idx)

        try:
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(quiz_data, file, indent=4, ensure_ascii=False)
            print(f"✅ Unicode corregido en: {file_path}")
        except Exception as e:
            print(f"❌ Error al escribir {file_path}: {e}")




def main():
    while True:
        print("\nMenú de opciones:")
        print("1. Actualizar archivos de preguntas")
        print("2. Mostrar el ID actual")
        print("3. Corregir caracteres Unicode en preguntas")
        print("4. Salir")
        
        option = input("Seleccione una opción: ")
        
        if option == "1":
            update_quiz_files()
        elif option == "2":
            print(f"ID actual: {load_id_count()}")
        elif option == "3":
            fix_unicode()
        elif option == "4":
            print("Saliendo del programa.")
            break
        else:
            print("Opción inválida. Intente de nuevo.")

if __name__ == "__main__":
    main()
