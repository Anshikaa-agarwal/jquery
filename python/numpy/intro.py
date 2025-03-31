import numpy as np
arr = np.array([1,2,3])
print(arr)
print("Numpy version: " + np.__version__)
print("Type:", type(arr))
a = np.array(12)
b = np.array([12])
c = np.array([["apple",2], [3,4]])
d = np.array([[1,2,3], [4,5,6], [2,3,1]])
e = np.array([[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]])

print("Dimension of a: " , a.ndim)
print("Dimension of b: " , b.ndim)
print("Dimension of c: " , c.ndim)
print("Dimension of d: " , d.ndim)
print("Dimension of e: " , e.ndim)

print(a)
print(b)
print(c)
print(d)
print(e)

print(a.dtype)

# joining arrays
arr1 = np.array([1,2,3])
arr2 = np.array([4,5,6])
arr3 = np.concatenate((arr1, arr2))

print(arr3)

arr4 = np.array_split(arr3, 2)
print(arr4)