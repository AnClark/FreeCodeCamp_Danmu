/**
 * Created by AnCla on 2017/6/23.
 */

/**
    Configurations
 */

var font_size_between = {
    max: 40,
    min: 15
};

var color_list = ['#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238', '#000000', '#ffffff'];

var danmu_template = "<div id='{$T.danmu_id}' class='danmu' style='font-size: {$T.font_size}; color: {$T.color}; left: {$T.left}'><span>{$T.danmu_text}</span></div>";



function danmuAnimator_jQuery(speed, danmu_id, clearAfterAnimation) {
    // 用jQuery实现动画
    $("#" + danmu_id).animate({
        left: "-" + $("#" + danmu_id + "> span").css("width")
    }, speed, clearAfterAnimation)

}

function showDanmu(danmu_text) {
    /** 弹幕的主要参数集中设置 **/
    var danmu_parameters = {
        danmu_text: danmu_text,
        danmu_id: (Math.random() * 100).toString().replace(".", ""),
        font_size: Math.floor(Math.random() * font_size_between.max) + font_size_between.min + "px",    //随机获取字体大小
        color: color_list[Math.floor(Math.random() * color_list.length + 1)],    //随机获取颜色
        top: Math.floor(Math.random() * 75 + 1) + "%",              /** 随机指派出现位置 **/
        left: $(".danmu-area").css("width")
    };


    /** 随机指派滚动速度 **/
    // 采用 JQuery 实现，以毫秒为单位
    var scroll_speed_str = Math.random() * 10000 + 3000;

    /** 生成一个新的弹幕文字元素 **/
    $("<div class='danmu-wrapper' style='top: " + danmu_parameters.top + "'></div>").appendTo(".danmu-area")
        .setTemplate(danmu_template)
        .processTemplate(danmu_parameters);           // 建立新的<div>对象，并渲染模板


    /** 启用动画 **/
    // 定义一个用于清除已过完弹幕的回调函数，在动画完成后调用
    var clearAfterAnimation = function clearAfterAnimation(){
            $("#" + danmu_parameters.danmu_id).parent().remove()
    };



    // 显示弹幕动画，并在弹幕结束后调用弹幕清除函数
    danmuAnimator_jQuery(scroll_speed_str, danmu_parameters.danmu_id, clearAfterAnimation);

}


function clearDanmu()
{
    // 定义一个用于清除所有弹幕的回调函数，在动画完成后调用
    var clearAfterAnimation = function clearAfterAnimation(){
        $(".danmu").parent().remove();
    };


    // 为弹幕消失显示动画，并在动画结束后调用上述回调函数
    $(".danmu").hide(1000, clearAfterAnimation);

}
