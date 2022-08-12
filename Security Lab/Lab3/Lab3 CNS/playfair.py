import string

def playfair(plain,key):
    
    letters = string.ascii_lowercase
    letters = list(letters)

    
    key_length = len(key)
    array = [['' for i in range(5)]for j in range(5)]
    
    plainlist = list(plain)
    keylist = list(key)
    
    kunique = []
    element = letters

    element.remove("j")
          
    for i in keylist:
        if i in kunique:
            continue
        else:
            kunique.append(i)
            element.remove(i)
    
    row = 0
    col = 0
    for i in keylist:
        array[row][col] = i
        col += 1
        if(row == 5):
            break
        if(col == 5):
            col = 0
            row += 1
    
    rem = key_length%5
    quotient = key_length//5
    
    row = quotient   
    col = rem
    # fill remaining alphabets
    for i in element:
        if(col == 5):
            col = 0
            row += 1
        if(row == 5):
            break
        array[row][col] = i
        col += 1
    print(array)



# plain = input('Enter plain text: ')
plain = 'Checkpoint'

plain = plain.lower()
plain = plain.replace(" ","")
plain = plain.replace("j","i")

key = 'Joker'
key = key.lower()
key = key.replace(" ","")
key = key.replace("j","i")
playfair(plain,key)
