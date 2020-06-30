function checkSerial() {


        var x = document.getElementById("nxsn");
        if (x.validity.valid && x.value.length > 8) {
            var series = x.value.substring(1, 2).toUpperCase();
            var sn;
            
            var failed='<div class="failed checker_p">Уязвимость устранена</div><p>Вы не сможете прошить приставку методом <a href="https://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a>.</p><p>Перейдите в <strong>Системные настройки</strong> -> <strong>Система</strong> и обратите внимание на пункт "<strong>Текущая версия системы</strong>". Если <strong>версия системного ПО на консоли 4.1.0</strong>, то её можно прошить с помощью <a class="checker_a" href="http://switch.customfw.xyz/caffeine">Caffeine</a></p><img src="img/system-version.jpg" alt="Версия системного ПО"><p>Если версия системного ПО выше указанной, то всё что вам остаётся - чиповка. Для вашей приставки подойдёт <strong>чип SX Core.</strong></p><p><strong>Подробнее про чипы <a href="https://sx.customfw.xyz/">на сайте нашего магазина</a>. Там же можно сделать заказ.</strong></p>';

            var maybe='<div class="maybe checker_p">Уязвимость возможно устранена</div><p class="checker_p">Это значит, что невозможно определить с помощью серийного номера можно ли прошить приставку через <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a> или нет. Единственный верный способ, который поможет понять прошивается ваша приставка или нет без покупки чипа - <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. </p><p class="checker_p"><strong>Если уязвимость присутствует то приставка запустит переданный ей пейлоад.</strong> Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно. В логе программы будет указано значение <strong>0x0000</strong>. Это означает, что вашу приставку нельзя прошить с помощью <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a></p><img class="checker_img" src="http://check.customfw.xyz/tegra.png"></p><p class="checker_p">Если это ваш случай, то для вашей приставки подойдёт <strong>чип SX Core.</strong></p><p class="checker_p"><strong>Подробнее про чипы <a href="https://sx.customfw.xyz/">на сайте нашего магазина</a>. Там же можно сделать заказ.</strong></p>';

            var passed='<div class="passed checker_p">Уязвимость присутствует</div><p class="checker_p">Вы можете прошить свою приставку методом <a href="https://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a>. Для этого перейдите по ссылке и внимательно следуйте инструкции!';

            var new_revision='<div class="new_revision checker_p">Ваша приставка новой ревизии и прошивается только с помощью чипа SX Core</div><p class="checker_p"><strong>Подробнее про чипы <a href="https://sx.customfw.xyz/">на сайте нашего магазина</a>. Там же можно сделать заказ.</strong></p>';

            var unknown='<div class="unknown checker_p">Нет информации по введённому серийному номеру</div><p class="checker_p">Проверьте, правильно ли вы ввели серийный номер</p><p class="checker_p">Если серийный номер всё-таки введён верно, значит серийников такого типа ещё нет в нашей базе. Возможно, приставка выпускалась эксклюзивно для китайского региона. </p><p class="checker_p">В любом случае, если серийник введён верно, то вашу приставку нельзя прошить с помощью <a class="checker_a" href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a>. Если это ваш случай, то для вашей приставки подойдёт <strong>чип SX Core.</strong></p><p class="checker_p"><strong>Подробнее про чипы <a href="https://sx.customfw.xyz/">на сайте нашего магазина</a>. Там же можно сделать заказ.</strong></p>';

            
            $('.table__wrapper').slideUp(300);
            $('.check-result').removeClass('hidden')
            $('.checker_p').slideUp(300);
            $('.check-result').fadeIn(300);

            switch (series) {
                case 'K': 
                    document.querySelector(".check-result").innerHTML = new_revision;
                
                case 'A': 
                    var series = x.value.substring(1, 4).toUpperCase();
                    var sn;
                        switch (series) {
                            case 'AW1':
                                sn = x.value.substring(4, 8);
                                if (sn.localeCompare('012') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('0075') >= 0) {
                                    document.querySelector(".check-result").innerHTML = maybe;
                                } else if (sn.localeCompare('0074') <= 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;
                                
                            case 'AW4':
                                sn = x.value.substring(4, 8);
                                if (sn.localeCompare('0012') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('0011') >= 0) {
                                    document.querySelector(".check-result").innerHTML = maybe;
                                } else if (sn.localeCompare('0011') < 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;
                                
                            case 'AW7':
                                sn = x.value.substring(4, 9);
                                if (sn.localeCompare('003') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('00178') >= 0) {
                                    document.querySelector(".check-result").innerHTML = maybe;
                                } else if (sn.localeCompare('00178') < 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;
                                
                            case 'AJ1':
                                sn = x.value.substring(4, 7);
                                if (sn.localeCompare('003') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('002') >= 0) {
                                    document.querySelector(".check-result").innerHTML = maybe;
                                } else if (sn.localeCompare('002') < 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;
                                
                            case 'AJ4':
                                sn = x.value.substring(4, 10);
                                if (sn.localeCompare('0083') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('00532') < 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else if (sn.localeCompare('00533') >= 0) {
                                    document.querySelector(".check-result").innerHTML = maybe;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;
                                    
                            case 'AJ7':
                                sn = x.value.substring(4, 9);
                                if (sn.localeCompare('00464') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('004') >= 0) {
                                    document.querySelector(".check-result").innerHTML = maybe;
                                } else if (sn.localeCompare('004') < 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;
                                
                            case 'AW9':
                                document.querySelector(".check-result").innerHTML = '<div class="passed">Скорее всего это восстановленная в Nintendo приставка <br>Как правило, они прошиваются</div>';
                                break;

                            case 'AK1':
                                sn = x.value.substring(4, 10);
                                if (sn.localeCompare('0006') >= 0) {
                                    document.querySelector(".check-result").innerHTML = failed;
                                } else if (sn.localeCompare('0006') < 0) {
                                    document.querySelector(".check-result").innerHTML = passed;
                                } else {
                                    document.querySelector(".check-result").innerHTML = unknown;
                                }
                                break;


                    }

            }
            
        }
        else {
            if (x.value.length > 8) {
                document.querySelector(".check-result").innerHTML = "<b>Нет данных. Проверьте правильно ли введён серийный номер.</b>";
            }
        }
    }
