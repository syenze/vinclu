vinclu
======

    // ライブラリの読み込み
    <script type="text/javascript" src="vinclu_led.js"></script>
    
    <script type="text/javascript">
    // 点灯
    led1 = new VincluLed(100,100);
    // 激しく点滅　
    led2 = new VincluLed(100, 1);
    // 緩やかな点滅
    led3 = new VincluLed(100, 10);
    
    // 点灯
    led1.on();
    // 消灯
    led1.off();

    </script>

======
