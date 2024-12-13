gdjs._22823_38272Code = {};
gdjs._22823_38272Code.localVariables = [];
gdjs._22823_38272Code.GDNewSpriteObjects1= [];
gdjs._22823_38272Code.GDNewSpriteObjects2= [];
gdjs._22823_38272Code.GDNewSpriteObjects3= [];
gdjs._22823_38272Code.GDNewSpriteObjects4= [];
gdjs._22823_38272Code.GDNewSprite4Objects1= [];
gdjs._22823_38272Code.GDNewSprite4Objects2= [];
gdjs._22823_38272Code.GDNewSprite4Objects3= [];
gdjs._22823_38272Code.GDNewSprite4Objects4= [];
gdjs._22823_38272Code.GDNewText2Objects1= [];
gdjs._22823_38272Code.GDNewText2Objects2= [];
gdjs._22823_38272Code.GDNewText2Objects3= [];
gdjs._22823_38272Code.GDNewText2Objects4= [];
gdjs._22823_38272Code.GDNewTextObjects1= [];
gdjs._22823_38272Code.GDNewTextObjects2= [];
gdjs._22823_38272Code.GDNewTextObjects3= [];
gdjs._22823_38272Code.GDNewTextObjects4= [];
gdjs._22823_38272Code.GDNewSprite3Objects1= [];
gdjs._22823_38272Code.GDNewSprite3Objects2= [];
gdjs._22823_38272Code.GDNewSprite3Objects3= [];
gdjs._22823_38272Code.GDNewSprite3Objects4= [];
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects1= [];
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects2= [];
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects3= [];
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects4= [];
gdjs._22823_38272Code.GD_95951Objects1= [];
gdjs._22823_38272Code.GD_95951Objects2= [];
gdjs._22823_38272Code.GD_95951Objects3= [];
gdjs._22823_38272Code.GD_95951Objects4= [];
gdjs._22823_38272Code.GD_95952Objects1= [];
gdjs._22823_38272Code.GD_95952Objects2= [];
gdjs._22823_38272Code.GD_95952Objects3= [];
gdjs._22823_38272Code.GD_95952Objects4= [];
gdjs._22823_38272Code.GD_95953Objects1= [];
gdjs._22823_38272Code.GD_95953Objects2= [];
gdjs._22823_38272Code.GD_95953Objects3= [];
gdjs._22823_38272Code.GD_95953Objects4= [];
gdjs._22823_38272Code.GD_95954Objects1= [];
gdjs._22823_38272Code.GD_95954Objects2= [];
gdjs._22823_38272Code.GD_95954Objects3= [];
gdjs._22823_38272Code.GD_95954Objects4= [];


gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595951Objects1Objects = Hashtable.newFrom({"_1": gdjs._22823_38272Code.GD_95951Objects1});
gdjs._22823_38272Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室1", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Ghost.mp3", true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "浴室2", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Ghost.mp3", true, 30, 1);
}}

}


};gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595952Objects1Objects = Hashtable.newFrom({"_2": gdjs._22823_38272Code.GD_95952Objects1});
gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595953Objects1Objects = Hashtable.newFrom({"_3": gdjs._22823_38272Code.GD_95953Objects1});
gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595954Objects1Objects = Hashtable.newFrom({"_4": gdjs._22823_38272Code.GD_95954Objects1});
gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22823_38272Code.GDNewSprite4Objects1});
gdjs._22823_38272Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._22823_38272Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._22823_38272Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._22823_38272Code.GDNewTextObjects3[i].getBehavior("Text").setText("深鎖的大門，門外似乎有甚麼在呼喚著我。");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CG2", false);
}}

}


};gdjs._22823_38272Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._22823_38272Code.GDNewSprite4Objects1, gdjs._22823_38272Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22823_38272Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._22823_38272Code.GDNewSprite4Objects2[i].getVariableString(gdjs._22823_38272Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "大門" ) {
        isConditionTrue_0 = true;
        gdjs._22823_38272Code.GDNewSprite4Objects2[k] = gdjs._22823_38272Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._22823_38272Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._22823_38272Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs._22823_38272Code.GDNewSprite4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._22823_38272Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._22823_38272Code.GDNewSprite4Objects1[i].getVariableString(gdjs._22823_38272Code.GDNewSprite4Objects1[i].getVariables().getFromIndex(0)) == "大衣" ) {
        isConditionTrue_0 = true;
        gdjs._22823_38272Code.GDNewSprite4Objects1[k] = gdjs._22823_38272Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._22823_38272Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._22823_38272Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._22823_38272Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GDNewTextObjects1[i].getBehavior("Text").setText("沾滿血跡的土黃色大衣，和我的身材很相襯。");
}
}}

}


};gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22823_38272Code.GDNewSprite4Objects1});
gdjs._22823_38272Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22823_38272Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._22823_38272Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._22823_38272Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22823_38272Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._22823_38272Code.GD_95954Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._22823_38272Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}{for(var i = 0, len = gdjs._22823_38272Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GD_95951Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._22823_38272Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GD_95952Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._22823_38272Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GD_95953Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._22823_38272Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GD_95954Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._22823_38272Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._22823_38272Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._22823_38272Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595952Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._22823_38272Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595953Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._22823_38272Code.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GD_959595954Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22823_38272Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22823_38272Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._22823_38272Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22823_38272Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}
{ //Subevents
gdjs._22823_38272Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22823_38272Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_38272Code.mapOfGDgdjs_9546_959522823_959538272Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}}

}


};

gdjs._22823_38272Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22823_38272Code.GDNewSpriteObjects1.length = 0;
gdjs._22823_38272Code.GDNewSpriteObjects2.length = 0;
gdjs._22823_38272Code.GDNewSpriteObjects3.length = 0;
gdjs._22823_38272Code.GDNewSpriteObjects4.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects1.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects2.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects3.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects4.length = 0;
gdjs._22823_38272Code.GDNewText2Objects1.length = 0;
gdjs._22823_38272Code.GDNewText2Objects2.length = 0;
gdjs._22823_38272Code.GDNewText2Objects3.length = 0;
gdjs._22823_38272Code.GDNewText2Objects4.length = 0;
gdjs._22823_38272Code.GDNewTextObjects1.length = 0;
gdjs._22823_38272Code.GDNewTextObjects2.length = 0;
gdjs._22823_38272Code.GDNewTextObjects3.length = 0;
gdjs._22823_38272Code.GDNewTextObjects4.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects1.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects2.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects3.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects4.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects4.length = 0;
gdjs._22823_38272Code.GD_95951Objects1.length = 0;
gdjs._22823_38272Code.GD_95951Objects2.length = 0;
gdjs._22823_38272Code.GD_95951Objects3.length = 0;
gdjs._22823_38272Code.GD_95951Objects4.length = 0;
gdjs._22823_38272Code.GD_95952Objects1.length = 0;
gdjs._22823_38272Code.GD_95952Objects2.length = 0;
gdjs._22823_38272Code.GD_95952Objects3.length = 0;
gdjs._22823_38272Code.GD_95952Objects4.length = 0;
gdjs._22823_38272Code.GD_95953Objects1.length = 0;
gdjs._22823_38272Code.GD_95953Objects2.length = 0;
gdjs._22823_38272Code.GD_95953Objects3.length = 0;
gdjs._22823_38272Code.GD_95953Objects4.length = 0;
gdjs._22823_38272Code.GD_95954Objects1.length = 0;
gdjs._22823_38272Code.GD_95954Objects2.length = 0;
gdjs._22823_38272Code.GD_95954Objects3.length = 0;
gdjs._22823_38272Code.GD_95954Objects4.length = 0;

gdjs._22823_38272Code.eventsList3(runtimeScene);
gdjs._22823_38272Code.GDNewSpriteObjects1.length = 0;
gdjs._22823_38272Code.GDNewSpriteObjects2.length = 0;
gdjs._22823_38272Code.GDNewSpriteObjects3.length = 0;
gdjs._22823_38272Code.GDNewSpriteObjects4.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects1.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects2.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects3.length = 0;
gdjs._22823_38272Code.GDNewSprite4Objects4.length = 0;
gdjs._22823_38272Code.GDNewText2Objects1.length = 0;
gdjs._22823_38272Code.GDNewText2Objects2.length = 0;
gdjs._22823_38272Code.GDNewText2Objects3.length = 0;
gdjs._22823_38272Code.GDNewText2Objects4.length = 0;
gdjs._22823_38272Code.GDNewTextObjects1.length = 0;
gdjs._22823_38272Code.GDNewTextObjects2.length = 0;
gdjs._22823_38272Code.GDNewTextObjects3.length = 0;
gdjs._22823_38272Code.GDNewTextObjects4.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects1.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects2.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects3.length = 0;
gdjs._22823_38272Code.GDNewSprite3Objects4.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._22823_38272Code.GD_9523565_9535441_9526684Objects4.length = 0;
gdjs._22823_38272Code.GD_95951Objects1.length = 0;
gdjs._22823_38272Code.GD_95951Objects2.length = 0;
gdjs._22823_38272Code.GD_95951Objects3.length = 0;
gdjs._22823_38272Code.GD_95951Objects4.length = 0;
gdjs._22823_38272Code.GD_95952Objects1.length = 0;
gdjs._22823_38272Code.GD_95952Objects2.length = 0;
gdjs._22823_38272Code.GD_95952Objects3.length = 0;
gdjs._22823_38272Code.GD_95952Objects4.length = 0;
gdjs._22823_38272Code.GD_95953Objects1.length = 0;
gdjs._22823_38272Code.GD_95953Objects2.length = 0;
gdjs._22823_38272Code.GD_95953Objects3.length = 0;
gdjs._22823_38272Code.GD_95953Objects4.length = 0;
gdjs._22823_38272Code.GD_95954Objects1.length = 0;
gdjs._22823_38272Code.GD_95954Objects2.length = 0;
gdjs._22823_38272Code.GD_95954Objects3.length = 0;
gdjs._22823_38272Code.GD_95954Objects4.length = 0;


return;

}

gdjs['_22823_38272Code'] = gdjs._22823_38272Code;
