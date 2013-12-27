var VincluLed = function( frequencyL , frequencyR ){

	//AudioContextを作成
	this.isOn = false;
    this.audio_context = null;
    this.audio_node = null;

    this.frequencyL = frequencyL;
    this.frequencyR = frequencyR;

	this.init = function(){
	    this.audio_context = new webkitAudioContext();
	};

	//再生する音のバッファーを作成する
    this.createAudioDataBuffer = function(context,frequencyL,frequencyR){
		//44100 は変更しない事
        context.samplingRate = 44100;
        var s = context.samplingRate * 2;
        var buffer = context.createBuffer(2, s, context.samplingRate);
        var audioDataL = buffer.getChannelData(0);
        var audioDataR = buffer.getChannelData(1);
        for(var i = 0; i < audioDataL.length; i++){
            var l = Math.sin(2 * Math.PI * frequencyL * i / context.samplingRate);
            var r = Math.sin(2 * Math.PI * frequencyR * i / context.samplingRate);
            audioDataL[i] = l;
            audioDataR[i] = r*-1;
        }
        return buffer;
	};
	
	//LEDの電源をON
	this.on = function(){
		console.log('on');
        this.isOn = true;	

        //バッファーを設定
        this.audio_node = this.audio_context.createBufferSource();
        this.audio_node.buffer = this.createAudioDataBuffer(this.audio_context,this.frequencyL,this.frequencyR);
        this.audio_node.loop = true;
        this.audio_node.connect(this.audio_context.destination);
        
        this.audio_node.noteOn(0);
	};
	
	//LEDの電源をOFF
	this.off = function( ){
        _this = this;
        if( _this.isOn ){
            console.log('off');
            _this.isOn = false;
            _this.audio_node.noteOff(0);
        }
	};
	
	//初期化
	this.init();
};
