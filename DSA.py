# a = 2
# b = 3
# print(a + b)
# a = str(input("Enter Your Name: \n"))
# print(a)

# # next
# n = int(input("Enter renge of a seris"))
# for i in range (n):
#     print(i)

# Febonacci series
n = int(input("Enter renge of febonacci series: "))
a=0
b=1
for i in range (n):
    print (a,end=", ")
    a,b=b,(a+b)