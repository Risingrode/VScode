package main

import (
	"bufio"//输入库
	"fmt"//输出库
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	maxNum := 100
	//随机数种子可以随时间变化
	rand.Seed(time.Now().UnixNano())
	//随机产生一个不超过100的数字
	secretNumber := rand.Intn(maxNum)
	// fmt.Println("The secret number is ", secretNumber)

	fmt.Println("Please input your guess")
	//
	reader := bufio.NewReader(os.Stdin)

	for {
		//读取输入的字符串，以换行结束
		input, err := reader.ReadString('\n')
		// fmt.Print(input)

		if err != nil {
			fmt.Println("An error occured while reading input. Please try again", err)
			continue
		}
		//把字符串前后面相应字符删去
		input = strings.Trim(input, "\r\n")

		guess, err := strconv.Atoi(input)//转化成数字
		if err != nil {
			fmt.Println("Invalid input. Please enter an integer value")
			continue
		}
		fmt.Println("You guess is", guess)

		if guess > secretNumber {
			fmt.Println("Your guess is bigger than the secret number. Please try again")
		} else if guess < secretNumber {
			fmt.Println("Your guess is smaller than the secret number. Please try again")
		} else {
			fmt.Println("Correct, you Legend!")
			break
		}
	}
}
