/**
 * Created by Administrator on 2016/6/25.
 */

//预制的过程
function say(word){
    console.log(this.name,word);
}
var obj ={
    name:'大小姐'
}
var newSay = say.bind(obj)
newSay('我爱你')


/*function  say(name)
{
    return function(word)
    {
        console.log(name,word)
    }
}

var newSay = say('大小姐')
newSay('我爱你')*/
var newDrink = drink(3,function(){
    console.log('喝完啦');
})
newDrink()
newDrink()
newDrink()

