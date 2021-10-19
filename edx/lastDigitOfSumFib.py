# Uses python3
def get_fibonacci_last_digit_naive(n):
  first = 0
  second = 1
  if(n==0):
    return 0
  if(n==1):
    return 1
  else:
    remind = n % 60
    if(remind == 0):
      return 0
    for i in range(2, remind + 3):
      third = (first + second) % 60
      first = second
      second = third
    return(second - 1) % 10

n = int(input())
print(get_fibonacci_last_digit_naive(n))
