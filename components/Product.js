export function Product(item, array) {
  const product = document.createElement('div');
  const name_prod = document.createElement('h2');
  const time_prod = document.createElement('h3');
  const delete_btn = document.createElement('button');
  const edit_btn = document.createElement('button');
  const img_delete = document.createElement('img');

  product.classList.add('product');

  if (item.isDone) {
    name_prod.classList.add('done');
  }

  name_prod.classList.add('name_prod');
  time_prod.classList.add('time_prod');
  delete_btn.classList.add('delete_btn');
  edit_btn.classList.add('edit_btn');

  img_delete.src = './svg/delete.svg';

  name_prod.innerHTML = item.title;
  time_prod.innerHTML = new Date().toLocaleTimeString();

  product.append(name_prod, time_prod, delete_btn, edit_btn);
  delete_btn.append(img_delete);

  delete_btn.onclick = () => {
    let idx = array.indexOf(item);
    array.splice(idx, 1);
    product.remove();
  };

  edit_btn.innerHTML = 'Edit';
  edit_btn.onclick = () => {
    
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = item.title; 

    const saveBtn = document.createElement('button');
    saveBtn.innerHTML = 'Save';
    saveBtn.onclick = () => {
      item.title = input.value; 
      name_prod.innerHTML = item.title; 
      modal.remove(); 
    };

    modal.append(input, saveBtn);
    document.body.append(modal);
  };



  name_prod.onclick = () => {
    item.isDone = !item.isDone;
    name_prod.classList.toggle('done', item.isDone);
  };

  return product;
}