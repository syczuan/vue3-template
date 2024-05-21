// 文本超出隐藏
export default function ellipsis(el: any, { value }: { value?: number }) {
  el.style.display = '-webkit-box';
  el.style['-webkit-box-orient'] = 'vertical';
  el.style['-webkit-line-clamp'] = value ? value : 1;
  el.style.overflow = 'hidden';
}
