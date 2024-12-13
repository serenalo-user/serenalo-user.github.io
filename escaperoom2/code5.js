gdjs._23458_24307Code = {};
gdjs._23458_24307Code.localVariables = [];
gdjs._23458_24307Code.GDNewSpriteObjects1= [];
gdjs._23458_24307Code.GDNewSpriteObjects2= [];
gdjs._23458_24307Code.GDNewSpriteObjects3= [];
gdjs._23458_24307Code.GDNewSpriteObjects4= [];
gdjs._23458_24307Code.GDNewSprite4Objects1= [];
gdjs._23458_24307Code.GDNewSprite4Objects2= [];
gdjs._23458_24307Code.GDNewSprite4Objects3= [];
gdjs._23458_24307Code.GDNewSprite4Objects4= [];
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects1= [];
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2= [];
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects3= [];
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects4= [];
gdjs._23458_24307Code.GDNewText2Objects1= [];
gdjs._23458_24307Code.GDNewText2Objects2= [];
gdjs._23458_24307Code.GDNewText2Objects3= [];
gdjs._23458_24307Code.GDNewText2Objects4= [];
gdjs._23458_24307Code.GDNewTextObjects1= [];
gdjs._23458_24307Code.GDNewTextObjects2= [];
gdjs._23458_24307Code.GDNewTextObjects3= [];
gdjs._23458_24307Code.GDNewTextObjects4= [];
gdjs._23458_24307Code.GDNewSprite3Objects1= [];
gdjs._23458_24307Code.GDNewSprite3Objects2= [];
gdjs._23458_24307Code.GDNewSprite3Objects3= [];
gdjs._23458_24307Code.GDNewSprite3Objects4= [];
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects1= [];
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects2= [];
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects3= [];
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects4= [];
gdjs._23458_24307Code.GD_95951Objects1= [];
gdjs._23458_24307Code.GD_95951Objects2= [];
gdjs._23458_24307Code.GD_95951Objects3= [];
gdjs._23458_24307Code.GD_95951Objects4= [];
gdjs._23458_24307Code.GD_95952Objects1= [];
gdjs._23458_24307Code.GD_95952Objects2= [];
gdjs._23458_24307Code.GD_95952Objects3= [];
gdjs._23458_24307Code.GD_95952Objects4= [];
gdjs._23458_24307Code.GD_95953Objects1= [];
gdjs._23458_24307Code.GD_95953Objects2= [];
gdjs._23458_24307Code.GD_95953Objects3= [];
gdjs._23458_24307Code.GD_95953Objects4= [];
gdjs._23458_24307Code.GD_95954Objects1= [];
gdjs._23458_24307Code.GD_95954Objects2= [];
gdjs._23458_24307Code.GD_95954Objects3= [];
gdjs._23458_24307Code.GD_95954Objects4= [];


gdjs._23458_24307Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("電視黑屏"), gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2);
{for(var i = 0, len = gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("電視黑屏"), gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects1);
{for(var i = 0, len = gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects1[i].hide();
}
}}

}


};gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595951Objects1Objects = Hashtable.newFrom({"_1": gdjs._23458_24307Code.GD_95951Objects1});
gdjs._23458_24307Code.eventsList1 = function(runtimeScene) {

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


};gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595952Objects1Objects = Hashtable.newFrom({"_2": gdjs._23458_24307Code.GD_95952Objects1});
gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595953Objects1Objects = Hashtable.newFrom({"_3": gdjs._23458_24307Code.GD_95953Objects1});
gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595954Objects1Objects = Hashtable.newFrom({"_4": gdjs._23458_24307Code.GD_95954Objects1});
gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._23458_24307Code.GDNewSprite4Objects1});
gdjs._23458_24307Code.asyncCallback11718556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._23458_24307Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1);
}gdjs._23458_24307Code.localVariables.length = 0;
}
gdjs._23458_24307Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._23458_24307Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._23458_24307Code.asyncCallback11718556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._23458_24307Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite3Objects1, gdjs._23458_24307Code.GDNewSprite3Objects3);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects3[i].getBehavior("Text").setText("一副佈滿髒污和血跡的面具放在櫃子裡，我將其拾取。");
}
}{for(var i = 0, len = gdjs._23458_24307Code.GDNewSprite3Objects3.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewSprite3Objects3[i].getBehavior("Animation").setAnimationIndex(8);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Item1.ogg", false, 30, 1);
}
{ //Subevents
gdjs._23458_24307Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite3Objects1, gdjs._23458_24307Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects2[i].getBehavior("Text").setText("原先放著面具的櫃子空空如也。");
}
}{for(var i = 0, len = gdjs._23458_24307Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};gdjs._23458_24307Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects3[i].getBehavior("Text").setText("新聞特報:『...昨日警方在郊區空屋發現死於S鎮殺人魔的新受害者。受害者身上多處骨折與傷口，陳屍於屋內錯綜複雜的機關旁...』");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "雜訊.mp3", false, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects3[i].getBehavior("Text").setText("新聞特報:『...昨日警方在郊區空屋發現死於S鎮殺人魔的新受害者。受害者身上多處骨折與傷口，陳屍於屋內錯綜複雜的機關旁...』");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "雜訊.mp3", false, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects3[i].getBehavior("Text").setText("新聞特報:『...據目擊者指出，殺人魔會將受害者帶至近郊空房殘忍折磨。每當警方趕到現場，總是只剩充滿血跡的室內與一間難解的密室...』");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "雜訊.mp3", false, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects3);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects3.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects3[i].getBehavior("Text").setText("新聞特報:『...因S鎮殺人魔總是頻繁更換行兇地點，因此警方遲遲無法逮住這名惡徒。請各位民眾保持警戒，留意周遭可疑人士...』");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "雜訊.mp3", false, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects2[i].getBehavior("Text").setText("........");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "雜訊.mp3", false, 30, 1);
}}

}


};gdjs._23458_24307Code.asyncCallback11730500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._23458_24307Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}gdjs._23458_24307Code.localVariables.length = 0;
}
gdjs._23458_24307Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._23458_24307Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._23458_24307Code.asyncCallback11730500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._23458_24307Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite3Objects1, gdjs._23458_24307Code.GDNewSprite3Objects2);

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewSprite3Objects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects2[i].getBehavior("Text").setText("燈罩上好像黏了東西，是一把鑰匙。");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Item1.ogg", false, 30, 1);
}
{ //Subevents
gdjs._23458_24307Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
/* Reuse gdjs._23458_24307Code.GDNewSprite3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects1[i].getBehavior("Text").setText("燈罩上除了鑰匙就沒有其他東西了。");
}
}}

}


};gdjs._23458_24307Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite4Objects1, gdjs._23458_24307Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23458_24307Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariableString(gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "櫃子" ) {
        isConditionTrue_0 = true;
        gdjs._23458_24307Code.GDNewSprite4Objects2[k] = gdjs._23458_24307Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._23458_24307Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._23458_24307Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite4Objects1, gdjs._23458_24307Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23458_24307Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariableString(gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "電視機" ) {
        isConditionTrue_0 = true;
        gdjs._23458_24307Code.GDNewSprite4Objects2[k] = gdjs._23458_24307Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._23458_24307Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("電視黑屏"), gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2);
{for(var i = 0, len = gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}
{ //Subevents
gdjs._23458_24307Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite4Objects1, gdjs._23458_24307Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23458_24307Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariableString(gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "畫框" ) {
        isConditionTrue_0 = true;
        gdjs._23458_24307Code.GDNewSprite4Objects2[k] = gdjs._23458_24307Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._23458_24307Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects2[i].getBehavior("Text").setText("一幅描繪老舊圖書館的畫作。");
}
}}

}


{

gdjs.copyArray(gdjs._23458_24307Code.GDNewSprite4Objects1, gdjs._23458_24307Code.GDNewSprite4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23458_24307Code.GDNewSprite4Objects2.length;i<l;++i) {
    if ( gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariableString(gdjs._23458_24307Code.GDNewSprite4Objects2[i].getVariables().getFromIndex(0)) == "鋼琴" ) {
        isConditionTrue_0 = true;
        gdjs._23458_24307Code.GDNewSprite4Objects2[k] = gdjs._23458_24307Code.GDNewSprite4Objects2[i];
        ++k;
    }
}
gdjs._23458_24307Code.GDNewSprite4Objects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._23458_24307Code.GDNewTextObjects2);
{for(var i = 0, len = gdjs._23458_24307Code.GDNewTextObjects2.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewTextObjects2[i].getBehavior("Text").setText("老舊的電子琴，已經發不出聲音了。");
}
}}

}


{

/* Reuse gdjs._23458_24307Code.GDNewSprite4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._23458_24307Code.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs._23458_24307Code.GDNewSprite4Objects1[i].getVariableString(gdjs._23458_24307Code.GDNewSprite4Objects1[i].getVariables().getFromIndex(0)) == "燈罩" ) {
        isConditionTrue_0 = true;
        gdjs._23458_24307Code.GDNewSprite4Objects1[k] = gdjs._23458_24307Code.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs._23458_24307Code.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._23458_24307Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._23458_24307Code.GDNewSprite4Objects1});
gdjs._23458_24307Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._23458_24307Code.GD_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._23458_24307Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._23458_24307Code.GD_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._23458_24307Code.GD_95954Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}{for(var i = 0, len = gdjs._23458_24307Code.GD_95951Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_95951Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._23458_24307Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_95952Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._23458_24307Code.GD_95953Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_95953Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._23458_24307Code.GD_95954Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GD_95954Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._23458_24307Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1"), gdjs._23458_24307Code.GD_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._23458_24307Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._23458_24307Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595952Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("_3"), gdjs._23458_24307Code.GD_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595953Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("_4"), gdjs._23458_24307Code.GD_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GD_959595954Objects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._23458_24307Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._23458_24307Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._23458_24307Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}
{ //Subevents
gdjs._23458_24307Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._23458_24307Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._23458_24307Code.mapOfGDgdjs_9546_959523458_959524307Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._23458_24307Code.GDNewSprite3Objects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs._23458_24307Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._23458_24307Code.GDNewSprite3Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


};

gdjs._23458_24307Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._23458_24307Code.GDNewSpriteObjects1.length = 0;
gdjs._23458_24307Code.GDNewSpriteObjects2.length = 0;
gdjs._23458_24307Code.GDNewSpriteObjects3.length = 0;
gdjs._23458_24307Code.GDNewSpriteObjects4.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects1.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects2.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects3.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects4.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects1.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects3.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects4.length = 0;
gdjs._23458_24307Code.GDNewText2Objects1.length = 0;
gdjs._23458_24307Code.GDNewText2Objects2.length = 0;
gdjs._23458_24307Code.GDNewText2Objects3.length = 0;
gdjs._23458_24307Code.GDNewText2Objects4.length = 0;
gdjs._23458_24307Code.GDNewTextObjects1.length = 0;
gdjs._23458_24307Code.GDNewTextObjects2.length = 0;
gdjs._23458_24307Code.GDNewTextObjects3.length = 0;
gdjs._23458_24307Code.GDNewTextObjects4.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects1.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects2.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects3.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects4.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects4.length = 0;
gdjs._23458_24307Code.GD_95951Objects1.length = 0;
gdjs._23458_24307Code.GD_95951Objects2.length = 0;
gdjs._23458_24307Code.GD_95951Objects3.length = 0;
gdjs._23458_24307Code.GD_95951Objects4.length = 0;
gdjs._23458_24307Code.GD_95952Objects1.length = 0;
gdjs._23458_24307Code.GD_95952Objects2.length = 0;
gdjs._23458_24307Code.GD_95952Objects3.length = 0;
gdjs._23458_24307Code.GD_95952Objects4.length = 0;
gdjs._23458_24307Code.GD_95953Objects1.length = 0;
gdjs._23458_24307Code.GD_95953Objects2.length = 0;
gdjs._23458_24307Code.GD_95953Objects3.length = 0;
gdjs._23458_24307Code.GD_95953Objects4.length = 0;
gdjs._23458_24307Code.GD_95954Objects1.length = 0;
gdjs._23458_24307Code.GD_95954Objects2.length = 0;
gdjs._23458_24307Code.GD_95954Objects3.length = 0;
gdjs._23458_24307Code.GD_95954Objects4.length = 0;

gdjs._23458_24307Code.eventsList8(runtimeScene);
gdjs._23458_24307Code.GDNewSpriteObjects1.length = 0;
gdjs._23458_24307Code.GDNewSpriteObjects2.length = 0;
gdjs._23458_24307Code.GDNewSpriteObjects3.length = 0;
gdjs._23458_24307Code.GDNewSpriteObjects4.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects1.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects2.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects3.length = 0;
gdjs._23458_24307Code.GDNewSprite4Objects4.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects1.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects2.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects3.length = 0;
gdjs._23458_24307Code.GD_9538651_9535222_9540657_9523631Objects4.length = 0;
gdjs._23458_24307Code.GDNewText2Objects1.length = 0;
gdjs._23458_24307Code.GDNewText2Objects2.length = 0;
gdjs._23458_24307Code.GDNewText2Objects3.length = 0;
gdjs._23458_24307Code.GDNewText2Objects4.length = 0;
gdjs._23458_24307Code.GDNewTextObjects1.length = 0;
gdjs._23458_24307Code.GDNewTextObjects2.length = 0;
gdjs._23458_24307Code.GDNewTextObjects3.length = 0;
gdjs._23458_24307Code.GDNewTextObjects4.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects1.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects2.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects3.length = 0;
gdjs._23458_24307Code.GDNewSprite3Objects4.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects3.length = 0;
gdjs._23458_24307Code.GD_9523565_9535441_9526684Objects4.length = 0;
gdjs._23458_24307Code.GD_95951Objects1.length = 0;
gdjs._23458_24307Code.GD_95951Objects2.length = 0;
gdjs._23458_24307Code.GD_95951Objects3.length = 0;
gdjs._23458_24307Code.GD_95951Objects4.length = 0;
gdjs._23458_24307Code.GD_95952Objects1.length = 0;
gdjs._23458_24307Code.GD_95952Objects2.length = 0;
gdjs._23458_24307Code.GD_95952Objects3.length = 0;
gdjs._23458_24307Code.GD_95952Objects4.length = 0;
gdjs._23458_24307Code.GD_95953Objects1.length = 0;
gdjs._23458_24307Code.GD_95953Objects2.length = 0;
gdjs._23458_24307Code.GD_95953Objects3.length = 0;
gdjs._23458_24307Code.GD_95953Objects4.length = 0;
gdjs._23458_24307Code.GD_95954Objects1.length = 0;
gdjs._23458_24307Code.GD_95954Objects2.length = 0;
gdjs._23458_24307Code.GD_95954Objects3.length = 0;
gdjs._23458_24307Code.GD_95954Objects4.length = 0;


return;

}

gdjs['_23458_24307Code'] = gdjs._23458_24307Code;
