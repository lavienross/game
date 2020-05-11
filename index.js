"use strict"

var app =  new Vue({
    el: '#game',
    data: {
      face: ':)',
      food: 'Food',
      singleUnusedEl: '',
      userScore: 0,
      locationX: 100,
      locationY: 100,
      foodLocationX: 160,
      foodLocationY: 180,
      mainColor: 'blue',
      divPosition: 'absolute'
    },
    mounted: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        window.addEventListener("keydown", function(e) {
          if (e.keyCode === 37) {app.moveLeft()};
          if (e.keyCode === 38) {app.moveUp()};
          if (e.keyCode === 39) {app.moveRight()};
          if (e.keyCode === 40) {app.moveDown()};
        });
      });
    },
    methods: {
      check: function() {
        if (Math.abs(this.foodLocationX - this.locationX) + Math.abs(this.foodLocationY - this.locationY) < 20) {
          this.generateFood();
          this.addPoints();
          this.levelUp();
        }
      },
      generateFood: function() {
        console.log('more food!');
        this.foodLocationX = Math.ceil(Math.floor((Math.random() * 300) + 1) / 10) * 10; 
        this.foodLocationY = Math.ceil(Math.floor((Math.random() * 300) + 1) / 10) * 10;
      },
      levelUp: function() {
        if (this.userScore === 10){
          this.face = "👶"
          this.food = "🍼"
        };
        if (this.userScore === 20){
          this.face = "🧒"
          this.food = "🍕"
        };
        if (this.userScore === 30){
          this.face = "📚✏️🙋🏫"
          this.food = "🌯"
        };
        if (this.userScore === 40){
          this.face = "🧒🏫"
          this.food = "🍷🍺"
        };
        if (this.userScore === 50){
          this.face = "🤢🤮"
          this.food = "🍕"
        };
        if (this.userScore === 60){
          this.face = "🔬🧒🧪🏫"
          this.food = "🌯"  
        };
        if (this.userScore === 70){
          this.face = "👩‍🎓"
        };
        if (this.userScore === 80){
          this.face = "🧑"
          this.food = "🍜"
        };
        if (this.userScore === 90){
          this.face = "👩‍🔬"
          this.food = "🥡"
        };
        if (this.userScore === 100){
          this.face = "👩‍🔬🐱"
        };
        if (this.userScore === 110){
          this.face = "👩‍🔬🔬🦠"
        };
        if (this.userScore === 120){
          this.face = "👩‍🔬🧪"
        };
        if (this.userScore === 130){
          this.face = "👩‍🔬💉🤒"
        };
        if (this.userScore === 140){
          this.face = "👩‍🔬🤝😊"
        };
        if (this.userScore === 150){
          this.face = "👩‍🐈‍‍"
          this.food = "🐈"
        };
        if (this.userScore === 160){
          this.face = "🐈👩‍🐈‍‍"
        };
        if (this.userScore === 170){
          this.face = "🐈🐈👵🐈"
        };
        if (this.userScore === 180){
          this.face = "🐈🐈👵🐈🐈"
          this.food = "🍵"
        };
        if (this.userScore === 190){
          this.face = "💀"
          this.food ="😇😈"
        };
        if (this.userScore === 200){
          this.face = "😇"
          this.food ="🥐"
        };
      },
      addPoints: function() {
        console.log('more points!');
        this.userScore += 10;
      },
      moveUp: function () {
        console.log('uped!');
        this.locationY -= 10;
        this.check();
      },
      moveDown: function () {
        console.log('downed!');
        this.locationY += 10;
        this.check()
      },
      moveRight: function () {
        console.log('uped!');
        this.locationX += 10;
        this.check()
      },
      moveLeft: function () {
        console.log('downed!');
        this.locationX -= 10;
        this.check()
      }
    }
})