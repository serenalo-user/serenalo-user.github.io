gdjs._28020_234601Code = {};
gdjs._28020_234601Code.localVariables = [];
gdjs._28020_234601Code.GDNewSpriteObjects1= [];
gdjs._28020_234601Code.GDNewSpriteObjects2= [];
gdjs._28020_234601Code.GDNewSpriteObjects3= [];
gdjs._28020_234601Code.GDNewSprite4Objects1= [];
gdjs._28020_234601Code.GDNewSprite4Objects2= [];
gdjs._28020_234601Code.GDNewSprite4Objects3= [];
gdjs._28020_234601Code.GDNewText2Objects1= [];
gdjs._28020_234601Code.GDNewText2Objects2= [];
gdjs._28020_234601Code.GDNewText2Objects3= [];
gdjs._28020_234601Code.GDNewTextObjects1= [];
gdjs._28020_234601Code.GDNewTextObjects2= [];
gdjs._28020_234601Code.GDNewTextObjects3= [];
gdjs._28020_234601Code.GDNewSprite3Objects1= [];
gdjs._28020_234601Code.GDNewSprite3Objects2= [];
gdjs._28020_234601Code.GDNewSprite3Objects3= [];
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects1= [];
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects2= [];
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects3= [];
gdjs._28020_234601Code.GD_95951Objects1= [];
gdjs._28020_234601Code.GD_95951Objects2= [];
gdjs._28020_234601Code.GD_95951Objects3= [];
gdjs._28020_234601Code.GD_95952Objects1= [];
gdjs._28020_234601Code.GD_95952Objects2= [];
gdjs._28020_234601Code.GD_95952Objects3= [];
gdjs._28020_234601Code.GD_95953Objects1= [];
gdjs._28020_234601Code.GD_95953Objects2= [];
gdjs._28020_234601Code.GD_95953Objects3= [];
gdjs._28020_234601Code.GD_95954Objects1= [];
gdjs._28020_234601Code.GD_95954Objects2= [];
gdjs._28020_234601Code.GD_95954Objects3= [];


gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595951Objects1Objects = Hashtable.newFrom({"_1": gdjs._28020_234601Code.GD_95951Objects1});
gdjs._28020_234601Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室1", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室2", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


};gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595952Objects1Objects = Hashtable.newFrom({"_2": gdjs._28020_234601Code.GD_95952Objects1});
gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595953Objects1Objects = Hashtable.newFrom({"_3": gdjs._28020_234601Code.GD_95953Objects1});
gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595954Objects1Objects = Hashtable.newFrom({"_4": gdjs._28020_234601Code.GD_95954Objects1});
gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._28020_234601Code.GDNewSprite4Objects1});
gdjs._28020_234601Code.asyncCallback11569916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._28020_234601Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室2", false);
}gdjs._28020_234601Code.localVariables.length = 0;
}
gdjs._28020_234601Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._28020_234601Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._28020_234601Code.asyncCallback11569916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._28020_234601Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234601Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._28020_234601Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._28020_234601Code.GDNewTextObjects2[i].getBehavior("Text").setText("這扇門鎖住了。");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._28020_234601Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._28020_234601Code.GDNewTextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "開門.mp3", false, 40, 1);
}{for(var i = 0, len = gdjs._28020_234601Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GDNewTextObjects1[i].getBehavior("Text").setText("用找到的鑰匙開啟了門。");
}
}{for(var i = 0, len = gdjs._28020_234601Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}
{ //Subevents
gdjs._28020_234601Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs._28020_234601Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs._28020_234601Code.GDNewSprite4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._28020_234601Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._28020_234601Code.GDNewSprite4Objects1[i].getVariableString(gdjs._28020_234601Code.GDNewSprite4Objects1[i].getVariables().getFromIndex(0)) == "浴室門" ) {
        isConditionTrue_0 = true;
        gdjs._28020_234601Code.GDNewSprite4Objects1[k] = gdjs._28020_234601Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._28020_234601Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234601Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._28020_234601Code.GDNewSprite4Objects1});
gdjs._28020_234601Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28020_234601Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._28020_234601Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28020_234601Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._28020_234601Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._28020_234601Code.GD_95954Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234601Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}{for(var i = 0, len = gdjs._28020_234601Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GD_95951Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._28020_234601Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GD_95952Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._28020_234601Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GD_95953Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._28020_234601Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GD_95954Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._28020_234601Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._28020_234601Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._28020_234601Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595952Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "臥室", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._28020_234601Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595953Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "客廳", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._28020_234601Code.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GD_959595954Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "大門", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._28020_234601Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._28020_234601Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._28020_234601Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._28020_234601Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}
{ //Subevents
gdjs._28020_234601Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._28020_234601Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._28020_234601Code.mapOfGDgdjs_9546_959528020_9595234601Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._28020_234601Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28020_234601Code.GDNewSpriteObjects1.length = 0;
gdjs._28020_234601Code.GDNewSpriteObjects2.length = 0;
gdjs._28020_234601Code.GDNewSpriteObjects3.length = 0;
gdjs._28020_234601Code.GDNewSprite4Objects1.length = 0;
gdjs._28020_234601Code.GDNewSprite4Objects2.length = 0;
gdjs._28020_234601Code.GDNewSprite4Objects3.length = 0;
gdjs._28020_234601Code.GDNewText2Objects1.length = 0;
gdjs._28020_234601Code.GDNewText2Objects2.length = 0;
gdjs._28020_234601Code.GDNewText2Objects3.length = 0;
gdjs._28020_234601Code.GDNewTextObjects1.length = 0;
gdjs._28020_234601Code.GDNewTextObjects2.length = 0;
gdjs._28020_234601Code.GDNewTextObjects3.length = 0;
gdjs._28020_234601Code.GDNewSprite3Objects1.length = 0;
gdjs._28020_234601Code.GDNewSprite3Objects2.length = 0;
gdjs._28020_234601Code.GDNewSprite3Objects3.length = 0;
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._28020_234601Code.GD_95951Objects1.length = 0;
gdjs._28020_234601Code.GD_95951Objects2.length = 0;
gdjs._28020_234601Code.GD_95951Objects3.length = 0;
gdjs._28020_234601Code.GD_95952Objects1.length = 0;
gdjs._28020_234601Code.GD_95952Objects2.length = 0;
gdjs._28020_234601Code.GD_95952Objects3.length = 0;
gdjs._28020_234601Code.GD_95953Objects1.length = 0;
gdjs._28020_234601Code.GD_95953Objects2.length = 0;
gdjs._28020_234601Code.GD_95953Objects3.length = 0;
gdjs._28020_234601Code.GD_95954Objects1.length = 0;
gdjs._28020_234601Code.GD_95954Objects2.length = 0;
gdjs._28020_234601Code.GD_95954Objects3.length = 0;

gdjs._28020_234601Code.eventsList4(runtimeScene);
gdjs._28020_234601Code.GDNewSpriteObjects1.length = 0;
gdjs._28020_234601Code.GDNewSpriteObjects2.length = 0;
gdjs._28020_234601Code.GDNewSpriteObjects3.length = 0;
gdjs._28020_234601Code.GDNewSprite4Objects1.length = 0;
gdjs._28020_234601Code.GDNewSprite4Objects2.length = 0;
gdjs._28020_234601Code.GDNewSprite4Objects3.length = 0;
gdjs._28020_234601Code.GDNewText2Objects1.length = 0;
gdjs._28020_234601Code.GDNewText2Objects2.length = 0;
gdjs._28020_234601Code.GDNewText2Objects3.length = 0;
gdjs._28020_234601Code.GDNewTextObjects1.length = 0;
gdjs._28020_234601Code.GDNewTextObjects2.length = 0;
gdjs._28020_234601Code.GDNewTextObjects3.length = 0;
gdjs._28020_234601Code.GDNewSprite3Objects1.length = 0;
gdjs._28020_234601Code.GDNewSprite3Objects2.length = 0;
gdjs._28020_234601Code.GDNewSprite3Objects3.length = 0;
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._28020_234601Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._28020_234601Code.GD_95951Objects1.length = 0;
gdjs._28020_234601Code.GD_95951Objects2.length = 0;
gdjs._28020_234601Code.GD_95951Objects3.length = 0;
gdjs._28020_234601Code.GD_95952Objects1.length = 0;
gdjs._28020_234601Code.GD_95952Objects2.length = 0;
gdjs._28020_234601Code.GD_95952Objects3.length = 0;
gdjs._28020_234601Code.GD_95953Objects1.length = 0;
gdjs._28020_234601Code.GD_95953Objects2.length = 0;
gdjs._28020_234601Code.GD_95953Objects3.length = 0;
gdjs._28020_234601Code.GD_95954Objects1.length = 0;
gdjs._28020_234601Code.GD_95954Objects2.length = 0;
gdjs._28020_234601Code.GD_95954Objects3.length = 0;


return;

}

gdjs['_28020_234601Code'] = gdjs._28020_234601Code;
