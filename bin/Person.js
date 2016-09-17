'use strict'

var app = app || {};

app.Person = {

	makePerson: function(headColor, bodyColor, stage){
		var head = new PIXI.Graphics();	
		var body = new PIXI.Graphics();
		this.personCon = new PIXI.Container();

		head.lineStyle(2, 0x000000);
		head.beginFill(headColor, 0.5);
		head.drawCircle(100, 50, 30);
		head.endFill();

		body.lineStyle(2, 0x000000);
		body.beginFill(bodyColor, 0.5);
		body.drawEllipse(100, 50, 100, 50);
		body.endFill();

		this.personCon.addChild(body);
		this.personCon.addChild(head);
		stage.addChild(this.personCon);

		return this.personCon;
	}
};