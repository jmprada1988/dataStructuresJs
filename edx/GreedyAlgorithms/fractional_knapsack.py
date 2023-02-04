# Uses python3

def best_item(values, weights):
  profits = [v/w for v, w in zip(values, weights)]
  return profits

def get_optimal_value(capacity, weights, values):
  p = best_item(values, weights)
  n = len(weights)
  index = list(range(n))
  index.sort(key=lambda i : p[i], reverse=True)
  max_value = 0
  fractions = [0] * n

  for i in index:
    if( weights[i] <= capacity):
      max_value += values[i]
      capacity -= weights[i]
      fractions[i] = 1
    else:
      fractions[i] = capacity /weights[i]
      max_value += values[i] * fractions[i]
      break
  print(max_value)
  return max_value

data = list(map(int, input().split()))
n, cap = data[0:2]
v = data[2:(2*n +2): 2]
w = data[3: (2 * n + 2): 2]
optimal_val = get_optimal_value(cap, w, v)
