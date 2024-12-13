gdjs._38283_38957_30059_38754Code = {};
gdjs._38283_38957_30059_38754Code.GDNewSpriteObjects1= [];
gdjs._38283_38957_30059_38754Code.GDNewSpriteObjects2= [];
gdjs._38283_38957_30059_38754Code.GDNewSprite4Objects1= [];
gdjs._38283_38957_30059_38754Code.GDNewSprite4Objects2= [];
gdjs._38283_38957_30059_38754Code.GDNewSprite2Objects1= [];
gdjs._38283_38957_30059_38754Code.GDNewSprite2Objects2= [];
gdjs._38283_38957_30059_38754Code.GD_9538626_9538283_9536938_9525138Objects1= [];
gdjs._38283_38957_30059_38754Code.GD_9538626_9538283_9536938_9525138Objects2= [];
gdjs._38283_38957_30059_38754Code.GDNewTextObjects1= [];
gdjs._38283_38957_30059_38754Code.GDNewTextObjects2= [];
gdjs._38283_38957_30059_38754Code.GDNewSprite3Objects1= [];
gdjs._38283_38957_30059_38754Code.GDNewSprite3Objects2= [];
gdjs._38283_38957_30059_38754Code.GD_9523565_9535441_9526684Objects1= [];
gdjs._38283_38957_30059_38754Code.GD_9523565_9535441_9526684Objects2= [];


gdjs._38283_38957_30059_38754Code.mapOfGDgdjs_9546_959538283_959538957_959530059_959538754Code_9546GD_95959538626_95959538283_95959536938_95959525138Objects1Objects = Hashtable.newFrom({"離開遊戲": gdjs._38283_38957_30059_38754Code.GD_9538626_9538283_9536938_9525138Objects1});
gdjs._38283_38957_30059_38754Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "額外物件", 0, 0, 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ghost.mp3", true, 20, 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "點擊");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "對話框");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("離開遊戲"), gdjs._38283_38957_30059_38754Code.GD_9538626_9538283_9536938_9525138Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_38957_30059_38754Code.mapOfGDgdjs_9546_959538283_959538957_959530059_959538754Code_9546GD_95959538626_95959538283_95959536938_95959525138Objects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SE-reload.mp3", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "開頭對話", false);
}}

}


};

gdjs._38283_38957_30059_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._38283_38957_30059_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSprite4Objects2.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSprite2Objects1.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSprite2Objects2.length = 0;
gdjs._38283_38957_30059_38754Code.GD_9538626_9538283_9536938_9525138Objects1.length = 0;
gdjs._38283_38957_30059_38754Code.GD_9538626_9538283_9536938_9525138Objects2.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewTextObjects1.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewTextObjects2.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSprite3Objects1.length = 0;
gdjs._38283_38957_30059_38754Code.GDNewSprite3Objects2.length = 0;
gdjs._38283_38957_30059_38754Code.GD_9523565_9535441_9526684Objects1.length = 0;
gdjs._38283_38957_30059_38754Code.GD_9523565_9535441_9526684Objects2.length = 0;

gdjs._38283_38957_30059_38754Code.eventsList0(runtimeScene);

return;

}

gdjs['_38283_38957_30059_38754Code'] = gdjs._38283_38957_30059_38754Code;
