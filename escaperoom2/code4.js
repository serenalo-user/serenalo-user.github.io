gdjs._33253_23460Code = {};
gdjs._33253_23460Code.localVariables = [];
gdjs._33253_23460Code.GDNewSpriteObjects1= [];
gdjs._33253_23460Code.GDNewSpriteObjects2= [];
gdjs._33253_23460Code.GDNewSpriteObjects3= [];
gdjs._33253_23460Code.GDNewSpriteObjects4= [];
gdjs._33253_23460Code.GDNewSprite4Objects1= [];
gdjs._33253_23460Code.GDNewSprite4Objects2= [];
gdjs._33253_23460Code.GDNewSprite4Objects3= [];
gdjs._33253_23460Code.GDNewSprite4Objects4= [];
gdjs._33253_23460Code.GDNewSprite2Objects1= [];
gdjs._33253_23460Code.GDNewSprite2Objects2= [];
gdjs._33253_23460Code.GDNewSprite2Objects3= [];
gdjs._33253_23460Code.GDNewSprite2Objects4= [];
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1= [];
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2= [];
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects3= [];
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects4= [];
gdjs._33253_23460Code.GD_9525151_95343992Objects1= [];
gdjs._33253_23460Code.GD_9525151_95343992Objects2= [];
gdjs._33253_23460Code.GD_9525151_95343992Objects3= [];
gdjs._33253_23460Code.GD_9525151_95343992Objects4= [];
gdjs._33253_23460Code.GDNewTextObjects1= [];
gdjs._33253_23460Code.GDNewTextObjects2= [];
gdjs._33253_23460Code.GDNewTextObjects3= [];
gdjs._33253_23460Code.GDNewTextObjects4= [];
gdjs._33253_23460Code.GDNewSprite3Objects1= [];
gdjs._33253_23460Code.GDNewSprite3Objects2= [];
gdjs._33253_23460Code.GDNewSprite3Objects3= [];
gdjs._33253_23460Code.GDNewSprite3Objects4= [];
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects1= [];
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects2= [];
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects3= [];
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects4= [];
gdjs._33253_23460Code.GD_95951Objects1= [];
gdjs._33253_23460Code.GD_95951Objects2= [];
gdjs._33253_23460Code.GD_95951Objects3= [];
gdjs._33253_23460Code.GD_95951Objects4= [];
gdjs._33253_23460Code.GD_95952Objects1= [];
gdjs._33253_23460Code.GD_95952Objects2= [];
gdjs._33253_23460Code.GD_95952Objects3= [];
gdjs._33253_23460Code.GD_95952Objects4= [];
gdjs._33253_23460Code.GD_95953Objects1= [];
gdjs._33253_23460Code.GD_95953Objects2= [];
gdjs._33253_23460Code.GD_95953Objects3= [];
gdjs._33253_23460Code.GD_95953Objects4= [];
gdjs._33253_23460Code.GD_95954Objects1= [];
gdjs._33253_23460Code.GD_95954Objects2= [];
gdjs._33253_23460Code.GD_95954Objects3= [];
gdjs._33253_23460Code.GD_95954Objects4= [];


gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_95959530896_95959525758_959595316654Objects2Objects = Hashtable.newFrom({"碰撞箱4": gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2});
gdjs._33253_23460Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._33253_23460Code.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("碰撞箱4"), gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._33253_23460Code.GDNewSprite2Objects2);
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2.length = 0;

{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite2Objects2[i].hide(false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_95959530896_95959525758_959595316654Objects2Objects, 158, 640, "點擊");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._33253_23460Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("碰撞箱4"), gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595951Objects1Objects = Hashtable.newFrom({"_1": gdjs._33253_23460Code.GD_95951Objects1});
gdjs._33253_23460Code.eventsList1 = function(runtimeScene) {

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


};gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595952Objects1Objects = Hashtable.newFrom({"_2": gdjs._33253_23460Code.GD_95952Objects1});
gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595953Objects1Objects = Hashtable.newFrom({"_3": gdjs._33253_23460Code.GD_95953Objects1});
gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595954Objects1Objects = Hashtable.newFrom({"_4": gdjs._33253_23460Code.GD_95954Objects1});
gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._33253_23460Code.GDNewSprite4Objects1});
gdjs._33253_23460Code.asyncCallback11678468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._33253_23460Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}gdjs._33253_23460Code.localVariables.length = 0;
}
gdjs._33253_23460Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._33253_23460Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._33253_23460Code.asyncCallback11678468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._33253_23460Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects3[i].getBehavior("Text").setText("床底下似乎有甚麼，但手勾不到。");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._33253_23460Code.GDNewSprite3Objects1, gdjs._33253_23460Code.GDNewSprite3Objects3);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Item1.ogg", false, 30, 1);
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects3[i].getBehavior("Text").setText("利用鐮刀勾取床底的物品，是一把小刀。");
}
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects3[i].getBehavior("Animation").setAnimationIndex(6);
}
}
{ //Subevents
gdjs._33253_23460Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._33253_23460Code.GDNewSprite3Objects1, gdjs._33253_23460Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects2[i].getBehavior("Text").setText("床底除了小刀就沒有其他東西了。");
}
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs._33253_23460Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._33253_23460Code.GDNewSprite4Objects1, gdjs._33253_23460Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._33253_23460Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._33253_23460Code.GDNewSprite4Objects2[i].getVariableString(gdjs._33253_23460Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "櫃子" ) {
        isConditionTrue_0 = true;
        gdjs._33253_23460Code.GDNewSprite4Objects2[k] = gdjs._33253_23460Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._33253_23460Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._33253_23460Code.GDNewSprite3Objects1, gdjs._33253_23460Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects2[i].getBehavior("Text").setText("一張報紙碎片擺放在最上層的櫃子:『倖存目擊者指出，潛伏在S鎮附近的殺人魔身穿土黃色外套、頭戴詭異面具，請各位民眾務必小心...』");
}
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationIndex(9);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Book1.ogg", false, 30, 1);
}}

}


{

gdjs.copyArray(gdjs._33253_23460Code.GDNewSprite4Objects1, gdjs._33253_23460Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._33253_23460Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._33253_23460Code.GDNewSprite4Objects2[i].getVariableString(gdjs._33253_23460Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "床" ) {
        isConditionTrue_0 = true;
        gdjs._33253_23460Code.GDNewSprite4Objects2[k] = gdjs._33253_23460Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._33253_23460Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._33253_23460Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._33253_23460Code.GDNewSprite4Objects1, gdjs._33253_23460Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._33253_23460Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._33253_23460Code.GDNewSprite4Objects2[i].getVariableString(gdjs._33253_23460Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "畫框" ) {
        isConditionTrue_0 = true;
        gdjs._33253_23460Code.GDNewSprite4Objects2[k] = gdjs._33253_23460Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._33253_23460Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects2[i].getBehavior("Text").setText("一幅描繪夏日海灘的畫作。");
}
}}

}


{

/* Reuse gdjs._33253_23460Code.GDNewSprite4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._33253_23460Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._33253_23460Code.GDNewSprite4Objects1[i].getVariableString(gdjs._33253_23460Code.GDNewSprite4Objects1[i].getVariables().getFromIndex(0)) == "斧頭" ) {
        isConditionTrue_0 = true;
        gdjs._33253_23460Code.GDNewSprite4Objects1[k] = gdjs._33253_23460Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._33253_23460Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects1[i].getBehavior("Text").setText("陰森的斧頭裝飾，斧頭是假的。");
}
}}

}


};gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_95959530896_95959525758_959595316654Objects1Objects = Hashtable.newFrom({"碰撞箱4": gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1});
gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._33253_23460Code.GDNewSprite4Objects1});
gdjs._33253_23460Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._33253_23460Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._33253_23460Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._33253_23460Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._33253_23460Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._33253_23460Code.GD_95954Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}{for(var i = 0, len = gdjs._33253_23460Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_95951Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._33253_23460Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_95952Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._33253_23460Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_95953Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._33253_23460Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_95954Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._33253_23460Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._33253_23460Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._33253_23460Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._33253_23460Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595952Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._33253_23460Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595953Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._33253_23460Code.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_959595954Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._33253_23460Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._33253_23460Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}
{ //Subevents
gdjs._33253_23460Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("碰撞箱4"), gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GD_95959530896_95959525758_959595316654Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._33253_23460Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._33253_23460Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._33253_23460Code.GDNewTextObjects1);
/* Reuse gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1 */
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(5);
}
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewTextObjects1[i].getBehavior("Text").setText("一把鐮刀掉在地上，剛才的怪聲似乎就是由此傳出。我把鐮刀從地上撿起。");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Item1.ogg", false, 30, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._33253_23460Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._33253_23460Code.mapOfGDgdjs_9546_959533253_959523460Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._33253_23460Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._33253_23460Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._33253_23460Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};

gdjs._33253_23460Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._33253_23460Code.GDNewSpriteObjects1.length = 0;
gdjs._33253_23460Code.GDNewSpriteObjects2.length = 0;
gdjs._33253_23460Code.GDNewSpriteObjects3.length = 0;
gdjs._33253_23460Code.GDNewSpriteObjects4.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects1.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects2.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects3.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects4.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects1.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects2.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects3.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects4.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects3.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects4.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects1.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects2.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects3.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects4.length = 0;
gdjs._33253_23460Code.GDNewTextObjects1.length = 0;
gdjs._33253_23460Code.GDNewTextObjects2.length = 0;
gdjs._33253_23460Code.GDNewTextObjects3.length = 0;
gdjs._33253_23460Code.GDNewTextObjects4.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects1.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects2.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects3.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects4.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects4.length = 0;
gdjs._33253_23460Code.GD_95951Objects1.length = 0;
gdjs._33253_23460Code.GD_95951Objects2.length = 0;
gdjs._33253_23460Code.GD_95951Objects3.length = 0;
gdjs._33253_23460Code.GD_95951Objects4.length = 0;
gdjs._33253_23460Code.GD_95952Objects1.length = 0;
gdjs._33253_23460Code.GD_95952Objects2.length = 0;
gdjs._33253_23460Code.GD_95952Objects3.length = 0;
gdjs._33253_23460Code.GD_95952Objects4.length = 0;
gdjs._33253_23460Code.GD_95953Objects1.length = 0;
gdjs._33253_23460Code.GD_95953Objects2.length = 0;
gdjs._33253_23460Code.GD_95953Objects3.length = 0;
gdjs._33253_23460Code.GD_95953Objects4.length = 0;
gdjs._33253_23460Code.GD_95954Objects1.length = 0;
gdjs._33253_23460Code.GD_95954Objects2.length = 0;
gdjs._33253_23460Code.GD_95954Objects3.length = 0;
gdjs._33253_23460Code.GD_95954Objects4.length = 0;

gdjs._33253_23460Code.eventsList5(runtimeScene);
gdjs._33253_23460Code.GDNewSpriteObjects1.length = 0;
gdjs._33253_23460Code.GDNewSpriteObjects2.length = 0;
gdjs._33253_23460Code.GDNewSpriteObjects3.length = 0;
gdjs._33253_23460Code.GDNewSpriteObjects4.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects1.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects2.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects3.length = 0;
gdjs._33253_23460Code.GDNewSprite4Objects4.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects1.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects2.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects3.length = 0;
gdjs._33253_23460Code.GDNewSprite2Objects4.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects1.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects2.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects3.length = 0;
gdjs._33253_23460Code.GD_9530896_9525758_95316654Objects4.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects1.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects2.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects3.length = 0;
gdjs._33253_23460Code.GD_9525151_95343992Objects4.length = 0;
gdjs._33253_23460Code.GDNewTextObjects1.length = 0;
gdjs._33253_23460Code.GDNewTextObjects2.length = 0;
gdjs._33253_23460Code.GDNewTextObjects3.length = 0;
gdjs._33253_23460Code.GDNewTextObjects4.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects1.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects2.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects3.length = 0;
gdjs._33253_23460Code.GDNewSprite3Objects4.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._33253_23460Code.GD_9523565_9535441_9526684Objects4.length = 0;
gdjs._33253_23460Code.GD_95951Objects1.length = 0;
gdjs._33253_23460Code.GD_95951Objects2.length = 0;
gdjs._33253_23460Code.GD_95951Objects3.length = 0;
gdjs._33253_23460Code.GD_95951Objects4.length = 0;
gdjs._33253_23460Code.GD_95952Objects1.length = 0;
gdjs._33253_23460Code.GD_95952Objects2.length = 0;
gdjs._33253_23460Code.GD_95952Objects3.length = 0;
gdjs._33253_23460Code.GD_95952Objects4.length = 0;
gdjs._33253_23460Code.GD_95953Objects1.length = 0;
gdjs._33253_23460Code.GD_95953Objects2.length = 0;
gdjs._33253_23460Code.GD_95953Objects3.length = 0;
gdjs._33253_23460Code.GD_95953Objects4.length = 0;
gdjs._33253_23460Code.GD_95954Objects1.length = 0;
gdjs._33253_23460Code.GD_95954Objects2.length = 0;
gdjs._33253_23460Code.GD_95954Objects3.length = 0;
gdjs._33253_23460Code.GD_95954Objects4.length = 0;


return;

}

gdjs['_33253_23460Code'] = gdjs._33253_23460Code;
