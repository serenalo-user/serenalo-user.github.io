gdjs.CGCode = {};
gdjs.CGCode.GDNewSpriteObjects1= [];
gdjs.CGCode.GDNewSpriteObjects2= [];
gdjs.CGCode.GDNewSpriteObjects3= [];
gdjs.CGCode.GDNewSprite4Objects1= [];
gdjs.CGCode.GDNewSprite4Objects2= [];
gdjs.CGCode.GDNewSprite4Objects3= [];
gdjs.CGCode.GDNewSprite2Objects1= [];
gdjs.CGCode.GDNewSprite2Objects2= [];
gdjs.CGCode.GDNewSprite2Objects3= [];
gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects1= [];
gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects2= [];
gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects3= [];
gdjs.CGCode.GDNewTextObjects1= [];
gdjs.CGCode.GDNewTextObjects2= [];
gdjs.CGCode.GDNewTextObjects3= [];
gdjs.CGCode.GDNewSprite3Objects1= [];
gdjs.CGCode.GDNewSprite3Objects2= [];
gdjs.CGCode.GDNewSprite3Objects3= [];
gdjs.CGCode.GD_9523565_9535441_9526684Objects1= [];
gdjs.CGCode.GD_9523565_9535441_9526684Objects2= [];
gdjs.CGCode.GD_9523565_9535441_9526684Objects3= [];


gdjs.CGCode.asyncCallback11190596 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}
gdjs.CGCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11190596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.asyncCallback11192308 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}}
gdjs.CGCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11192308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.asyncCallback11194164 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}}
gdjs.CGCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11194164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.asyncCallback11195404 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}}
gdjs.CGCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11195404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.asyncCallback11197380 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(6);
}}
gdjs.CGCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11197380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.asyncCallback11198764 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(7);
}}
gdjs.CGCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11198764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.asyncCallback11200428 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(8);
}}
gdjs.CGCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.CGCode.asyncCallback11200428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CGCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CGCode.GDNewTextObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs.CGCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewTextObjects2[i].getBehavior("Text").setText("我離開浴室，前往傳出怪聲的臥室查看。");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "SE-MOVE.wav", false, 30, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11189916);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CGCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.CGCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewTextObjects2[i].getBehavior("Text").setText("『天花板上的那個東西...就是發出怪聲的來源吧?』");
}
}
{ //Subevents
gdjs.CGCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11191220);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CGCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.CGCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewTextObjects2[i].getBehavior("Text").setText("...?!");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Fire1.ogg", false, 30, 1);
}
{ //Subevents
gdjs.CGCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11193340);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CGCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(4);
}
}{for(var i = 0, len = gdjs.CGCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewTextObjects2[i].getBehavior("Text").setText("*啪滋!*");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.ogg", false, 30, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "血肉.mp3", false, 50, 1);
}
{ //Subevents
gdjs.CGCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11195284);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}
{ //Subevents
gdjs.CGCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11196780);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CGCode.GDNewTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs.CGCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewTextObjects2[i].getBehavior("Text").setText("...........");
}
}
{ //Subevents
gdjs.CGCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11198692);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.CGCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.CGCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewTextObjects2[i].getBehavior("Text").setText("『...啊啊...果然會這樣啊...』");
}
}
{ //Subevents
gdjs.CGCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11200332);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects2[i].getBehavior("Animation").setAnimationIndex(4);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}
{ //Subevents
gdjs.CGCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.CGCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite2Objects1[i].getBehavior("Animation").setAnimationIndex(5);
}
}}

}


};gdjs.CGCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("離開遊戲"), gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}{for(var i = 0, len = gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects1.length ;i < len;++i) {
    gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.CGCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.CGCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.CGCode.GDNewSprite3Objects1[i].hide();
}
}
{ //Subevents
gdjs.CGCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Darkness.ogg", true, 10, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Key2.ogg", false, 15, 1);
}}

}


};

gdjs.CGCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CGCode.GDNewSpriteObjects1.length = 0;
gdjs.CGCode.GDNewSpriteObjects2.length = 0;
gdjs.CGCode.GDNewSpriteObjects3.length = 0;
gdjs.CGCode.GDNewSprite4Objects1.length = 0;
gdjs.CGCode.GDNewSprite4Objects2.length = 0;
gdjs.CGCode.GDNewSprite4Objects3.length = 0;
gdjs.CGCode.GDNewSprite2Objects1.length = 0;
gdjs.CGCode.GDNewSprite2Objects2.length = 0;
gdjs.CGCode.GDNewSprite2Objects3.length = 0;
gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects1.length = 0;
gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects2.length = 0;
gdjs.CGCode.GD_9538626_9538283_9536938_9525138Objects3.length = 0;
gdjs.CGCode.GDNewTextObjects1.length = 0;
gdjs.CGCode.GDNewTextObjects2.length = 0;
gdjs.CGCode.GDNewTextObjects3.length = 0;
gdjs.CGCode.GDNewSprite3Objects1.length = 0;
gdjs.CGCode.GDNewSprite3Objects2.length = 0;
gdjs.CGCode.GDNewSprite3Objects3.length = 0;
gdjs.CGCode.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs.CGCode.GD_9523565_9535441_9526684Objects2.length = 0;
gdjs.CGCode.GD_9523565_9535441_9526684Objects3.length = 0;

gdjs.CGCode.eventsList8(runtimeScene);

return;

}

gdjs['CGCode'] = gdjs.CGCode;
