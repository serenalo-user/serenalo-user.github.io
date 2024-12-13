gdjs._28020_234602Code = {};
gdjs._28020_234602Code.GDNewSpriteObjects1= [];
gdjs._28020_234602Code.GDNewSpriteObjects2= [];
gdjs._28020_234602Code.GDNewSpriteObjects3= [];
gdjs._28020_234602Code.GDNewSpriteObjects4= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects3= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects4= [];
gdjs._28020_234602Code.GDNewSprite6Objects1= [];
gdjs._28020_234602Code.GDNewSprite6Objects2= [];
gdjs._28020_234602Code.GDNewSprite6Objects3= [];
gdjs._28020_234602Code.GDNewSprite6Objects4= [];
gdjs._28020_234602Code.GDNewSprite7Objects1= [];
gdjs._28020_234602Code.GDNewSprite7Objects2= [];
gdjs._28020_234602Code.GDNewSprite7Objects3= [];
gdjs._28020_234602Code.GDNewSprite7Objects4= [];
gdjs._28020_234602Code.GDNewSprite2Objects1= [];
gdjs._28020_234602Code.GDNewSprite2Objects2= [];
gdjs._28020_234602Code.GDNewSprite2Objects3= [];
gdjs._28020_234602Code.GDNewSprite2Objects4= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects2= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects3= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects4= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects3= [];
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects4= [];
gdjs._28020_234602Code.GDNewSprite4Objects1= [];
gdjs._28020_234602Code.GDNewSprite4Objects2= [];
gdjs._28020_234602Code.GDNewSprite4Objects3= [];
gdjs._28020_234602Code.GDNewSprite4Objects4= [];
gdjs._28020_234602Code.GDNewSprite5Objects1= [];
gdjs._28020_234602Code.GDNewSprite5Objects2= [];
gdjs._28020_234602Code.GDNewSprite5Objects3= [];
gdjs._28020_234602Code.GDNewSprite5Objects4= [];
gdjs._28020_234602Code.GDNewSprite8Objects1= [];
gdjs._28020_234602Code.GDNewSprite8Objects2= [];
gdjs._28020_234602Code.GDNewSprite8Objects3= [];
gdjs._28020_234602Code.GDNewSprite8Objects4= [];
gdjs._28020_234602Code.GDNewText2Objects1= [];
gdjs._28020_234602Code.GDNewText2Objects2= [];
gdjs._28020_234602Code.GDNewText2Objects3= [];
gdjs._28020_234602Code.GDNewText2Objects4= [];
gdjs._28020_234602Code.GDNewTextObjects1= [];
gdjs._28020_234602Code.GDNewTextObjects2= [];
gdjs._28020_234602Code.GDNewTextObjects3= [];
gdjs._28020_234602Code.GDNewTextObjects4= [];
gdjs._28020_234602Code.GDNewSprite3Objects1= [];
gdjs._28020_234602Code.GDNewSprite3Objects2= [];
gdjs._28020_234602Code.GDNewSprite3Objects3= [];
gdjs._28020_234602Code.GDNewSprite3Objects4= [];
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects1= [];
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects2= [];
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects3= [];
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects4= [];


gdjs._28020_234602Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28020_234602Code.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite2Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28020_234602Code.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite2Objects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._28020_234602Code.GDNewSprite3Objects1, gdjs._28020_234602Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects2[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{gdjs.evtTools.sound.playSound(runtimeScene, "水流.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("浴室某處傳來水流聲。");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(2);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._28020_234602Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(5);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


};gdjs._28020_234602Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects2Objects = Hashtable.newFrom({"NewSprite5": gdjs._28020_234602Code.GDNewSprite5Objects2});
gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects2Objects = Hashtable.newFrom({"NewSprite8": gdjs._28020_234602Code.GDNewSprite8Objects2});
gdjs._28020_234602Code.asyncCallback10956820 = function (runtimeScene, asyncObjectsList) {
gdjs._28020_234602Code.GDNewSprite5Objects2.length = 0;

gdjs._28020_234602Code.GDNewSprite8Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects2Objects, 444, 98, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects2Objects, 442, 264, "");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects2[i].getBehavior("Resizable").setSize(407, 110);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects2[i].getBehavior("Resizable").setSize(400, 106);
}
}}
gdjs._28020_234602Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._28020_234602Code.asyncCallback10956820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._28020_234602Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "臥室", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "臥室", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "快掉.mp3", false, 50, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects1[i].getBehavior("Text").setText("浴室外頭似乎傳來奇怪的聲響，要立刻出去看看嗎?");
}
}
{ //Subevents
gdjs._28020_234602Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects3Objects = Hashtable.newFrom({"NewSprite8": gdjs._28020_234602Code.GDNewSprite8Objects3});
gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects3Objects = Hashtable.newFrom({"NewSprite5": gdjs._28020_234602Code.GDNewSprite5Objects3});
gdjs._28020_234602Code.asyncCallback10959596 = function (runtimeScene, asyncObjectsList) {
gdjs._28020_234602Code.GDNewSprite5Objects3.length = 0;

gdjs._28020_234602Code.GDNewSprite8Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects3Objects, 442, 264, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects3Objects, 444, 98, "");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects3[i].getBehavior("Resizable").setSize(407, 110);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects3[i].getBehavior("Resizable").setSize(400, 106);
}
}}
gdjs._28020_234602Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._28020_234602Code.asyncCallback10959596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._28020_234602Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "快掉.mp3", false, 50, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("浴室外頭似乎傳來奇怪的聲響，要立刻出去看看嗎?");
}
}
{ //Subevents
gdjs._28020_234602Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "客廳", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "客廳", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects3Objects = Hashtable.newFrom({"NewSprite8": gdjs._28020_234602Code.GDNewSprite8Objects3});
gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects3Objects = Hashtable.newFrom({"NewSprite5": gdjs._28020_234602Code.GDNewSprite5Objects3});
gdjs._28020_234602Code.asyncCallback10963692 = function (runtimeScene, asyncObjectsList) {
gdjs._28020_234602Code.GDNewSprite5Objects3.length = 0;

gdjs._28020_234602Code.GDNewSprite8Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects3Objects, 442, 264, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects3Objects, 444, 98, "");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects3[i].getBehavior("Resizable").setSize(407, 110);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects3[i].getBehavior("Resizable").setSize(400, 106);
}
}}
gdjs._28020_234602Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._28020_234602Code.asyncCallback10963692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._28020_234602Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "快掉.mp3", false, 50, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("浴室外頭似乎傳來奇怪的聲響，要立刻出去看看嗎?");
}
}
{ //Subevents
gdjs._28020_234602Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "大門", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "大門", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._28020_234602Code.GDNewSprite5Objects1});
gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._28020_234602Code.GDNewSprite8Objects1});
gdjs._28020_234602Code.asyncCallback10969276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSound(runtimeScene, "掉落.mp3", false, 100, 1);
}}
gdjs._28020_234602Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._28020_234602Code.asyncCallback10969276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316651Objects1Objects = Hashtable.newFrom({"碰撞箱1": gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1});
gdjs._28020_234602Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects3[i].getBehavior("Text").setText("裡頭裝著詭異的酸性紫色液體，最好不要輕易靠近。");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Poison.ogg", false, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._28020_234602Code.GDNewSprite3Objects1, gdjs._28020_234602Code.GDNewSprite3Objects3);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects3[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects3[i].getBehavior("Text").setText("紫色的液體順著排水溝排乾，露出浴缸底部的物體。是一隻塑膠鴨子。");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Item1.ogg", false, 30, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._28020_234602Code.GDNewSprite3Objects1, gdjs._28020_234602Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("用小刀把塑膠鴨子開腸剖肚，裡頭藏著一把鑰匙。");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sword5.ogg", false, 30, 1);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationIndex(7);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}}

}


};gdjs._28020_234602Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1, gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length;i<l;++i) {
    if ( gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i].getVariableString(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i].getVariables().getFromIndex(0)) == "鏡子" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[k] = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i];
        ++k;
    }
}
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("鏡子裡印照著我憔悴的面孔。");
}
}}

}


{

gdjs.copyArray(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1, gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length;i<l;++i) {
    if ( gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i].getVariableString(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i].getVariables().getFromIndex(0)) == "畫框" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[k] = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i];
        ++k;
    }
}
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("一幅描繪陰森審判場的畫作。");
}
}}

}


{

gdjs.copyArray(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1, gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length;i<l;++i) {
    if ( gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i].getVariableString(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i].getVariables().getFromIndex(0)) == "浴缸" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[k] = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2[i];
        ++k;
    }
}
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234602Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1.length;i<l;++i) {
    if ( gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1[i].getVariableString(gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1[i].getVariables().getFromIndex(0)) == "水槽" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1[k] = gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1[i];
        ++k;
    }
}
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects1[i].getBehavior("Text").setText("只能流出冰水的洗手槽，內側沾著幾滴乾涸的血跡。");
}
}}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316652Objects1Objects = Hashtable.newFrom({"碰撞箱2": gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1});
gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316653Objects1Objects = Hashtable.newFrom({"碰撞箱3": gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1});
gdjs._28020_234602Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1, gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2.length;i<l;++i) {
    if ( gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2[i].getVariableString(gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2[i].getVariables().getFromIndex(0)) == "紙條" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2[k] = gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2[i];
        ++k;
    }
}
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._28020_234602Code.GDNewSprite3Objects1, gdjs._28020_234602Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects2[i].getBehavior("Text").setText("一張泛黃的紙條。");
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Book1.ogg", false, 30, 1);
}}

}


{

/* Reuse gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1.length;i<l;++i) {
    if ( gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1[i].getVariableString(gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1[i].getVariables().getFromIndex(0)) == "瓶罐" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1[k] = gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1[i];
        ++k;
    }
}
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects1[i].getBehavior("Text").setText("幾瓶盥洗用具。");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "沐浴乳解謎", false);
}}

}


};gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316651Objects1Objects = Hashtable.newFrom({"碰撞箱1": gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1});
gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316653Objects1Objects = Hashtable.newFrom({"碰撞箱3": gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1});
gdjs._28020_234602Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28020_234602Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._28020_234602Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._28020_234602Code.GDNewSprite8Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs._28020_234602Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234602Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234602Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234602Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num4");
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234602Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._28020_234602Code.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs._28020_234602Code.GDNewSprite5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._28020_234602Code.GDNewSprite8Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "SE-reload.mp3", false, 10, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CG", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._28020_234602Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GDNewSprite8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._28020_234602Code.GDNewSprite5Objects1);
/* Reuse gdjs._28020_234602Code.GDNewSprite8Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "SE-reload.mp3", false, 10, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs._28020_234602Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("碰撞箱1"), gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316651Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28020_234602Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}
{ //Subevents
gdjs._28020_234602Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("碰撞箱2"), gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316652Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._28020_234602Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234602Code.GDNewTextObjects1);
/* Reuse gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "櫃子.mp3", false, 40, 1);
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite2Objects1[i].hide(false);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewTextObjects1[i].getBehavior("Text").setText("將櫃子打開，裡頭有一張紙條與幾瓶盥洗用具。");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("碰撞箱3"), gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316653Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28020_234602Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}
{ //Subevents
gdjs._28020_234602Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("碰撞箱1"), gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1);
gdjs.copyArray(runtimeScene.getObjects("碰撞箱3"), gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316651Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234602Code.mapOfGDgdjs_9546_959528020_9595234602Code_9546GD_95959530896_95959525758_959595316653Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28020_234602Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234602Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28020_234602Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};

gdjs._28020_234602Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28020_234602Code.GDNewSpriteObjects1.length = 0;
gdjs._28020_234602Code.GDNewSpriteObjects2.length = 0;
gdjs._28020_234602Code.GDNewSpriteObjects3.length = 0;
gdjs._28020_234602Code.GDNewSpriteObjects4.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects1.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects2.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects3.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316651Objects4.length = 0;
gdjs._28020_234602Code.GDNewSprite6Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite6Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite6Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite6Objects4.length = 0;
gdjs._28020_234602Code.GDNewSprite7Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite7Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite7Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite7Objects4.length = 0;
gdjs._28020_234602Code.GDNewSprite2Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite2Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite2Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite2Objects4.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects1.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects2.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects3.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316652Objects4.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects1.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects2.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects3.length = 0;
gdjs._28020_234602Code.GD_9530896_9525758_95316653Objects4.length = 0;
gdjs._28020_234602Code.GDNewSprite4Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite4Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite4Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite4Objects4.length = 0;
gdjs._28020_234602Code.GDNewSprite5Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite5Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite5Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite5Objects4.length = 0;
gdjs._28020_234602Code.GDNewSprite8Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite8Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite8Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite8Objects4.length = 0;
gdjs._28020_234602Code.GDNewText2Objects1.length = 0;
gdjs._28020_234602Code.GDNewText2Objects2.length = 0;
gdjs._28020_234602Code.GDNewText2Objects3.length = 0;
gdjs._28020_234602Code.GDNewText2Objects4.length = 0;
gdjs._28020_234602Code.GDNewTextObjects1.length = 0;
gdjs._28020_234602Code.GDNewTextObjects2.length = 0;
gdjs._28020_234602Code.GDNewTextObjects3.length = 0;
gdjs._28020_234602Code.GDNewTextObjects4.length = 0;
gdjs._28020_234602Code.GDNewSprite3Objects1.length = 0;
gdjs._28020_234602Code.GDNewSprite3Objects2.length = 0;
gdjs._28020_234602Code.GDNewSprite3Objects3.length = 0;
gdjs._28020_234602Code.GDNewSprite3Objects4.length = 0;
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._28020_234602Code.GD_9523565_9535441_9526684Objects4.length = 0;

gdjs._28020_234602Code.eventsList12(runtimeScene);

return;

}

gdjs['_28020_234602Code'] = gdjs._28020_234602Code;
