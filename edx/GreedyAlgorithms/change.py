# Uses python3

#computes the least amount of coins for change
def get_change(n):
    dimes = n // 10
    rem = n % 10
    nickle = rem // 5

    return dimes + nickle + (rem % 5)



n = int(input())
print(get_change(n))
