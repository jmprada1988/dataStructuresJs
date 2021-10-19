# Uses python3
def get_fibonacci_last_digit_naive(n):
    if n < 2:
        return n

    else:
      previous,current = 0,1

    for _ in range(1,n):
        previous, current = current, (previous + current) % 10

    return current

n = int(input())
print(get_fibonacci_last_digit_naive(n))
