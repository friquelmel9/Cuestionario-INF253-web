import json

count = 1

## Have the number in a txt format:
file = open("public/jsonFiles/idCount.txt",'r')
idCount = int(file.read())
file.close()

while count < 6:
    stringJson = "src/jsonFiles/quiz{}.json".format(count)

    with open(stringJson, 'r') as file:
        list = json.load(file)
        
        for question in list['vf']:
            if "id" not in question:
                question["id"] = idCount
                idCount += 1
        
        for question in list['alt']:
            if "id" not in question:
                question["id"] = idCount
                idCount += 1
            if "intAnswers" not in question:
                question["intAnswers"] = 4

    with open(stringJson, 'w') as file:
        json.dump(list, file, indent=4)
    count += 1

file = open("public/jsonFiles/idCount.txt",'w')
file.write(str(idCount))
file.close()

print("Id's agregadas")