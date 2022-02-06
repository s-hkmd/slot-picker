/**
 * スロットピッカーの要素を取得
 */
const observer_root = document.querySelector('.slot-picker');
const slot1 = document.querySelectorAll('#slot1 .slot-picker__select-item');
const slot2 = document.querySelectorAll('#slot2 .slot-picker__select-item');
const slot3 = document.querySelectorAll('#slot3 .slot-picker__select-item');

/**
 * 選択されたときに実行(CSS:Scroll-snapでスナップされた時、位置情報などを取得)
 */
const getSlotValue = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      changeInputValues(entry.target);
    }
  });
};

/**
 * Input要素にドラムロールで選択された値を代入
 */
const changeInputValues = element => {
  const slot_wrapper = element.parentNode;
  const input_element = document.querySelector(`input[data-slot="${slot_wrapper.id}"]`);
  input_element.textContent = element.textContent;
  input_element.value = element.textContent; // type="hidden"インプットに対して使用
};

/**
 * Intersection Observer実行処理
 */
// スロットの値を取得するときの位置(オフセット)を定義(今回はY軸オフセットを-50%に設定)
const options = {
  root: observer_root,
  rootMargin: '-50% 0px',
  threshold: 0
};

// オブザーバー実行(後ほど、汎用的に使えるように見直す)
const observer = new IntersectionObserver(getSlotValue, options);
slot1.forEach(section => observer.observe(section));
slot2.forEach(section => observer.observe(section));
slot3.forEach(section => observer.observe(section));
