mydict = {
    'G1': {'x': [5, 3], 'y': [7, 6], 'p': [9, 7, 8]},
    'H4': {'x': [3, 9], 'y': [5, 3, 2], 'm': [3, 1, 0]}
}

rm = {}

for key, val in mydict.items():
    for key_in, val_in in val.items():
        if key_in not in rm:
            temp = {}
        else:
            temp = rm[key_in]

        temp[key] = val_in  # Assign the value to the inner dictionary
        rm[key_in] = temp  # Update the main dictionary

print(str(rm))
