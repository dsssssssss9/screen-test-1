LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(123)
LCD1IN8.LCD_Display()
LCD1IN8.DisString(
60,
80,
"Hello",
LCD1IN8.Get_Color(LCD_COLOR.BLACK)
)
LCD1IN8.LCD_Display()
basic.forever(function () {
	
})
