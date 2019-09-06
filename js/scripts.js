const copyClick = document.querySelector('.copyright');
const copyContent = document.querySelector('.copy_content');

const copyShow = () => {
  copyContent.style.display = "block";
}

copyClick.addEventListener('click', copyShow);
