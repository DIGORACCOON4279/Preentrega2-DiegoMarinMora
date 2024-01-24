#Tekni
![heroSection](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/7f8b23be-b2ab-44c9-9443-4b080eeedb6c)</br>

********************************************************************************************************************************************************************************
# Iniciativa</br>

Este proyecto de ecommerce ficticio llamado " Tekni "  -- venta de dispositivos electronicos --  fue escogido para trabajar durante la cursada de React. 
Se realizaran dos preentregas y la entrega final a medida que se vaya realizando las consignas de cada entrega para moldear el proyecto segun los objetivos del curso.</br>

👉 Herramientas que se utilizaran durante el desarrollo del proyecto: 🛠 </br>

![figma](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/fca318c0-6b7d-4046-b0aa-55a83f0419a3) Figma</br>
![animations](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/2fdc31da-eb29-4247-90d3-0b5727606aa7) Animations CSS (@keyframes & transitions)</br>
![photopea](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/ceac05f4-c505-4889-85d0-60a1566fc4ef) Photopea</br>
![github](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/01f94f79-8e78-42f8-bc9a-2b6707a9a36d) Github</br>
![gitbash](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/3d2e83ec-bea3-47bf-a5a4-d9524e0406b0) Git Bash </br>
![nodejs](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/1944cc14-d0b8-43f7-b859-7f15025239c0) NodeJS </br>
![npm](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/e703b698-4589-43d5-b5ba-2a75693a3691) npm &</br>
![vsc](https://github.com/DIGORACCOON4279/EntregaFinal/assets/88150970/bd61bcc5-5a44-4c33-b675-d03bb01589c0) VSC</br>

👉 Lenguajes, preprocesador, library & framework que se utilizaran durante el desarrollo del proyecto: 🛠</br>

![css](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/b2e2f475-b8d9-4188-aae4-fe7e9a7acf4a)CSS (Lenguaje de estilos)</br>
![html](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/b0692228-5ca9-433d-a4c5-b52369d3c4bf)HTML (Lenguaje de marcado y estructura)</br>
![js](https://github.com/DIGORACCOON4279/Break-a-Leg/assets/88150970/1ef7c489-c0b4-41a6-bdce-b12d8c0654ad)JavaScript (Lenguage de programación)</br>
![react](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/af7de6da-ad17-45c7-95a6-3ef1e3c5f730) React (Library)</br>
![vite](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/f9c38eca-b09c-4f34-84a4-6e7d8ae983f0)Vite</br>
![firebase](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/9646a3cf-f814-482a-adad-d8e928df9b8c)Firebase(BD)</br>

Aunque no es necesario ni evaluativo, pero realizo un mockup en figma para tener mejor entendimiento de lo que se quiere lograr:</br>

💻[Prototipo desktop](https://www.figma.com/proto/uP83VlEVIz4hmSboxjuN2F/Tekny?page-id=2%3A10&type=design&node-id=57-589&viewport=-2255%2C1269%2C0.28&t=2HOa7ebSJPJxV5wp-1&scaling=scale-down&starting-point-node-id=57%3A589&mode=design)</br>
🚧I´m so sorry📱Cellphone (man at work)</br>

# Desarrollo</br>

En esta segunda Preentrega se avanza en la estructura y programacion del proyecto ecommerce -- Tekni -- despues de realizar la navbar, cartWidget & un greeting en ItemListcontainer explico en mas detalle como ejecuto esta preentrega y puntos adicionales al proyecto: </br>

>> ** Se cumple con la consigna de realizar routing & navegacion</br>
>>    ✔Navbar con cart</br>
>>    ✔Catálogo</br>
>>    ✔Detalle de producto</br>
>> ** La app contiene landing page, Error404, catalogo, descripcion por producto, 4 categorias, shoppingCart, createAccount, menu con 5 secciones.</br>
>> ** La navbar cuenta con: logo, user, shoppingCart & menu desplegable.</br>
>> ** El menu desplegable cuenta con 5 secciones home, products, categories, services & contact us</br>
>> ** Detallo realice una secccion categories con 4 opciones: smartphones, laptops, headset & smartTVs </br>
>> ** Se realiza la seccion de descripcion(ItemDeteilContainer) de cada producto con:</br>
>>     ✔Key Features</br>
>>     ✔Connectivity and Compatibility</br>
>>     ✔Operating System and Updates</br>
>>     ✔Con su respectivo precio, rating, stock, & add to cart</br>
>> ** Cada cart de los productos explica su categoria, id, precio, imagen, referencia & rating y boton "View product..."</br>
>> ** En el footer estan las redes sociales y varios links para tambien navegar entre categories y products, a las opciones sin relevancia se
>>    le asignaron un routing a la page Error404.</br>
>> ** Se crea un archivo llamado asyncmock.js para guardar un array de objetos llamado "products", el cual contiene 40 productos</br>
>> ** En el archivo asyncmock se aplica setTimeOut a getProducts, getOneProduct & getProductsByCategory con un tiempo de renderizado de espera de 2000ms</br>
>> ** Posicionamiento SEO (no esta en la consigna)</br>

A continuacion muestro algunas imagenes del proyecto </br>

✔** Landing Page</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/f423c45a-2aee-4e28-9445-b9215a9aad46)</br>

✔** Category Products</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/11835304-a29a-4026-8305-92b27de32c02)</br>

✔** ShoppingCart</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/7ef6e26b-0276-459f-b1cd-0c916b80588b)</br>

✔** DetailsContainer</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/274d2ba9-046d-44d3-87ae-4d3ff88e2de0)</br>

✔** Error404 Page</br>
![image](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/9ac080f1-c52d-4aab-adfe-f443b4a0f27e)</br>

🚧I´m so sorry📱Cellphone (man at work)</br>

En esta segunda preentrega se pide ya tener y realizar:</br>

** ✔ --NavBar</br>
** ✔ --CartWidget</br>
** ✔ --Item</br>
** ✔ --ItemList</br>
** ✔ --ItemListContainer</br>
** ✔ --ItemDetail</br>
** ✔ --ItemDetailContainer</br>
** ✔ --Asyncmock.js(Array de objetos con 40 produtos)</br>

La estructura a trabajar en los componentes src es crea una carpeta principal llamada components y se derivan los componentes antes nombrados con su respectivo archivos files.jsx & files.css por cada componente.</br>

src/</br>
|-- components/</br>
|   |-- Advantages/</br>
|   |   |-- Advantages.jsx</br>
|   |   |-- Advantages.css</br>
|   |-- AdvantagesTwo/</br>
|   |-- Advertising/</br>
|   |-- ArrowUp/</br>
|   |-- Body/</br>
|   |-- CartWidget/</br>
|   |-- CategoryHeadset/</br>
|   |-- CategoryLaptop/</br>
|   |-- CategorySections/</br>
|   |-- CategorySmartphones/</br>
|   |-- CategorySmarTv/</br>
|   |-- ContactUs/</br>
|   |-- Counter/</br>
|   |-- CreateAccount/</br>
|   |-- Error404/</br>
|   |-- Footer/</br>
|   |-- Headset/</br>
|   |-- HeroSection/</br>
|   |-- Home/</br>
|   |-- IconsMenu/</br>
|   |-- Item/</br>
|   |-- ItemDetail/</br>
|   |-- ItemDetailContainer/</br>
|   |-- ItemList/</br>
|   |-- ItemListContainer/</br>
|   |-- Laptops/</br>
|   |-- LogIn/</br>
|   |-- Menu/</br>
|   |-- NavBar/</br>
|   |-- NewGeneration/</br>
|   |-- RandomItemList/</br>
|   |-- Services/</br>
|   |-- ShoppingCart/</br>
|   |-- Smartphone/</br>
|   |-- SmartTvs/</br>
|   |-- TheBestSellers/</br>
|   |-- User/</br>
|   |-- WhiteLine/</br>
|-- App.jsx</br>
|-- asyncmock.js</br>
|-- index.jsx</br>

# Deployment</br>

🚀-- ![color_Netlify](https://github.com/DIGORACCOON4279/Preentrega2-DiegoMarinMora/assets/88150970/90470fa3-b09f-4478-b1e3-02882d2d49a1) -- [Netlify](https://tekni.netlify.app/)</br>
🚀-- ![white_Vercel](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/fb91138d-5ff2-4e82-a2f5-b2c8f0ea6b15) -- [Vercel]() -- Coming soon </br>


![raccon_Logo1](https://github.com/DIGORACCOON4279/PrimeraEntrega-DiegoMarinMora/assets/88150970/1903b752-acc7-4d2b-95db-cf877319fcb7)</br>

# React + Vite</br>
primera-entrega-tekni.vercel.app
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.</br>

Currently, two official plugins are available:</br>

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh</br>
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh</br>

  
