const accordion = document.querySelector('.accordion')
const content = document.querySelector('.content')

let accesory = [''];

const data = () => {
    return fetch('data.json')
    .then((res) => res.json())
    .then((data) => data)
};


async function acc() {
    const elem = await data()
    console.log(elem);

    elem.map(el => {
        const accordionItem = document.createElement('div');
        const accordionName = document.createElement('div');
        const accordionSpan = document.createElement('span');
        
        accordion.append(accordionItem);
        accordionItem.setAttribute('class', 'accordion__item');
        accordionItem.append(accordionName);
        accordionName.setAttribute('class', 'accordion__name');
        accordionName.textContent = `${el.name}`;
        accordionName.append(accordionSpan);
        accordionSpan.setAttribute('class', 'accordion__name_span')
        accordionSpan.textContent = '>';


        el.categories.map(el => {
            const category = document.createElement('div');
            const categorySpan = document.createElement('span');
            const categoryName = document.createElement('div');
            
            accordionItem.append(category);
            category.setAttribute('class', 'category');
            category.append(categoryName);
            categoryName.setAttribute('class', 'category__name');
            categoryName.textContent = `${el.name}`;
            categoryName.append(categorySpan);
            categorySpan.setAttribute('class', 'category__span');
            categorySpan.textContent = '>';

            el.categories.map(m => {
                const model = document.createElement('p');

                    category.append(model);
                    model.setAttribute('class', 'model');
                    model.textContent = `${m.name}`;
            })

            category.addEventListener('click', () => {
                category.classList.toggle('category-active')
            })
        })

        accordionName.addEventListener('click', () => {
            accordionItem.classList.toggle('active')
        })
    })
}
acc()

