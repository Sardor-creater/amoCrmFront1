widgetNameIntr = function() {
    var widget = this;
    this.code = null;

    this.yourVar = {};
    this.yourFunc = function() {};

    // вызывается один раз при инициализации виджета, в этой функции мы вешаем события на $(document)
    this.bind_actions = function(){
        $(document).on('tip:show', '.js-tip.card-cf-actions-tip', function(){
            var $val = $(this).prev("div").find('input').val();
            $('.tips__inner').find('.openSearch').remove();
            $('.tips__inner').append('<div class="tips-item js-tips-item js-cf-actions-item openSearch" data-type="copy"><span class="tips-icon tips-svg-icon"><svg class="svg-icon svg-common--copy-dims"><use xlink:href="#common--filter-search"></use></svg> </span> Нагуглит</div>');
            $('.openSearch').click(function () {
                window.open(`http://letmegooglethat.com/?q=${$val}` , '_blank');
                window.open(`https://yandex.ru/search/?text=${$val}`, '_blank');
            })
        });
    };

    // вызывается каждый раз при переходе на страницу
    this.render = function() {
    };
    // вызывается один раз при инициализации виджета, в этой функции мы загружаем нужные данные, стили и.т.п
    this.init = function(){

    };

    // метод загрузчик, не изменяется
    this.bootstrap = function(code) {
        widget.code = code;
        // если frontend_status не задан, то считаем что виджет выключен
        // var status = yadroFunctions.getSettings(code).frontend_status;
        var status = 1;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
};
// создание экземпляра виджета и регистрация в системных переменных Yadra
// widget-name - ИД и widgetNameIntr - уникальные названия виджета
yadroWidget.widgets['widget-name'] = new widgetNameIntr();
yadroWidget.widgets['widget-name'].bootstrap('widget-name');