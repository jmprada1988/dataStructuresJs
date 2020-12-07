def minimunCount(arr_1, arr_2)
  counter = 0

  array_1 = arr_1.to_s.chars.map(&:to_i)
  array_2 = arr_2.to_s.chars.map(&:to_i)

  array_1.each_with_index do |element, index|

    if element != array_2[index]
      difference = element - array_2[index]
      counter += difference.abs
    end
  end
  puts counter
end

minimunCount([123, 543], [321, 279])