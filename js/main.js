 /// jQuery component start
 (function ($) {
	 
  const Component = function (container) {
		this.$container = $(container);
		this.$wrapper = this.$container.closest('.table__wrapper');
		this.resultClass = this.$container.data('result');
		this.result = this.$wrapper.next('.result');
		
		this.result1Content = '<p class="checker_p"><strong>Введите первые 9 символов серийного номера консоли.</strong></p><p class="checker_p">Серийный номер консоли расположен на нижней грани самого планшета. Если приставка б\у, то убедитесь, что серийный номер на корпусе совпадает с тем, что указан в <strong>Системных настройках</strong> -> <strong>Система</strong> -> <strong>Серийные номера</strong>. Если после ввода серийника ничего не происходит, отключите блокировщик рекламы<div class="checker"><input class="inputtext" type="text" id="nxsn" name="country_code" pattern="[xX][aAkKjJtT][wWjJkKeE](1|4|7|9)[0-9]+" placeholder="XAW100000" onkeyup="checkSerial()"></div>';

		this.result2Content = '<div class="new_revision checker_p">Nintendo Switch Lite и Nintendo Switch OLED прошивается только с помощью чипа SX Lite или чипов линейки HWFLY</div><p class="checker_p"><strong>Подробнее про чипы <a href="https://switch.customfw.xyz/modchip">в руководстве</a>.</strong></p>';

		this.resultEmpty = '';
};

$.extend(true, Component.prototype, {
	init() {
	this._bindInteractions();
	},

	addContent() {
		if (this.resultClass === 'result1') {
			this.result.html(this.result1Content);
			$(".check-result").html("");
		} else if (this.resultClass === 'result2') {
			this.result.html(this.result2Content);
			$(".check-result").html("");
		}
	},

	showResult() {
		this.addContent() 
		
		this.result.slideDown(500);
			$('html, body').animate({
				scrollTop: $(".result").offset().top
			}, 600);		$('.result').removeClass('hidden')
	},

	_bindInteractions() {
	this.$container.on('click', this.showResult.bind(this));
	$(".descriptionToggler").click(function() {
			$( ".inputtext" ).focus();
  		});
	},
});
  const $component = $('.descriptionToggler');
  let instance;

  $component.each((i, item) => {
    instance = new Component(item);
    instance.init();
  });
}(jQuery));
/// jQuery component end