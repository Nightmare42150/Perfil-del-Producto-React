import React from 'react'

import { Helmet } from 'react-helmet'

import './perfil-del-producto.css'

const PerfilDelProducto = (props) => {
  return (
    <div className="perfil-del-producto-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="perfil-del-producto-perfil-de-producto">
        <img
          alt="FrontalCasco12107"
          src="/playground_assets/frontal_casco-400h.jpg"
          className="perfil-del-producto-frontal-casco"
        />
        <img
          alt="LateralIzquierda12321"
          src="/playground_assets/lateral_izquierda-200h.jpg"
          className="perfil-del-producto-lateral-izquierda"
        />
        <img
          alt="TraseroCasco12322"
          src="/playground_assets/trasero_casco-200h.jpg"
          className="perfil-del-producto-trasero-casco"
        />
        <img
          alt="IMAGE34Casco12320"
          src="/playground_assets/casco_lado-200h.jpg"
          className="perfil-del-producto-casco-lado"
        />
        <img
          alt="Cascobarato13333"
          src="/playground_assets/casco_barato-200h.jpg"
          className="perfil-del-producto-cascobarato"
        />
        <img
          alt="TazaHalo1466"
          src="/playground_assets/taza_halo-200h.jpg"
          className="perfil-del-producto-taza-halo"
        />
        <img
          alt="Doomhelmet1567"
          src="/playground_assets/doom_helmet-200w.jpg"
          className="perfil-del-producto-doomhelmet"
        />
        <img
          alt="Doomhelmet2568"
          src="/playground_assets/spiderman_helemt-200h.jpg"
          className="perfil-del-producto-spidermanhelemt"
        />
        <img
          alt="Doomhelmet3569"
          src="/playground_assets/ironman_helmet-200h.jpg"
          className="perfil-del-producto-iron-man-helmet"
        />
        <img
          alt="Doomhelmet4570"
          src="/playground_assets/titanfall_helmet-200h.jpg"
          className="perfil-del-producto-titanfall-helmet"
        />
        <p className="perfil-del-producto-titulo">
          <span>Disguise Halo Master Chief - Casco</span>
        </p>
        <p className="perfil-del-producto-descripcion">
          <br className="perfil-del-producto-text01"></br>
          <span className="perfil-del-producto-text02">
            -100% policloruro de vinilo
          </span>
          <br className="perfil-del-producto-text03"></br>
          <span className="perfil-del-producto-text04">-Importado</span>
          <br className="perfil-del-producto-text05"></br>
          <span className="perfil-del-producto-text06">
            -cierre de Sin cierre
          </span>
          <br className="perfil-del-producto-text07"></br>
          <span className="perfil-del-producto-text08">
            -Solo lavado a mano
          </span>
          <br className="perfil-del-producto-text09"></br>
          <span className="perfil-del-producto-text10">
            -Botón de presión fácil en el lado izquierdo que enciende y apaga
            las luces del casco
          </span>
          <br className="perfil-del-producto-text11"></br>
          <span className="perfil-del-producto-text12">-Producto oficial</span>
          <br className="perfil-del-producto-text13"></br>
          <span className="perfil-del-producto-text14">-HALO (Microsoft)</span>
          <br className="perfil-del-producto-text15"></br>
          <br className="perfil-del-producto-text16"></br>
          <span className="perfil-del-producto-text17">
            {' '}
            Tamaño: talla única
          </span>
          <br className="perfil-del-producto-text18"></br>
          <span className="perfil-del-producto-text19"> Color: Verde</span>
          <br className="perfil-del-producto-text20"></br>
        </p>
        <p className="perfil-del-producto-precio">
          <span>
            <span>Precio:US$64.37</span>
            <br></br>
            <span>Ahorras:US$9.62(13 %)</span>
          </span>
        </p>
        <div className="perfil-del-producto-container1">
          <p className="perfil-del-producto-precio-columna">
            <span>US$64.37</span>
          </p>
          <p className="perfil-del-producto-descripcion-pedido">
            <span>
              <span>
                Sin depósito de derechos de importación y US$11.75 de envío a
                Honduras
              </span>
              <br></br>
              <span></span>
            </span>
          </p>
          <p className="perfil-del-producto-descripcion-entrega">
            <span>
              <span>
                Entrega el Martes, 20 de Diciembre. Realiza el pedido en 20 hrs
                54 mins
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>O entrega más rápida el Viernes, 16 de Diciembre</span>
              <br></br>
              <span></span>
            </span>
          </p>
        </div>
        <div className="perfil-del-producto-container2">
          <img
            alt="icons8star961462"
            src="/playground_assets/icons8star961462-vl4n-200w.png"
            className="perfil-del-producto-icons8star961"
          />
          <p className="perfil-del-producto-rating">
            <span>4.8/5</span>
          </p>
        </div>
        <p className="perfil-del-producto-comprar-ya">
          <span>Comprar ya</span>
        </p>
        <p className="perfil-del-producto-agregar-al-carrito">
          Agregar al carrito
        </p>
        <p className="perfil-del-producto-similares">
          <span>Productos Similares</span>
        </p>
        <p className="perfil-del-producto-recomendaciones">
          <span>Recomendaciones</span>
        </p>
        <img
          alt="HaloCaja1464"
          src="/playground_assets/halo_caja-200h.jpg"
          className="perfil-del-producto-halo-caja"
        />
        <img
          alt="MegaConstructHalo1465"
          src="/playground_assets/megaconstruct_halo-200h.jpg"
          className="perfil-del-producto-mega-construct-halo1"
        />
        <svg
          viewBox="0 0 1024 1024"
          className="perfil-del-producto-share-button"
        >
          <path d="M691.797 772.181c1.067-1.408 2.048-2.859 2.987-4.437 0.853-1.493 1.621-3.029 2.304-4.565 3.115-4.608 6.656-8.917 10.581-12.843 15.488-15.488 36.736-25.003 60.331-25.003s44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331c0-13.867 3.285-26.923 9.131-38.485zM695.509 258.389c-0.384-0.725-0.768-1.451-1.195-2.176s-0.853-1.451-1.323-2.133c-6.571-12.075-10.325-25.941-10.325-40.747 0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003c-4.608-4.608-8.704-9.728-12.16-15.275zM328.491 466.944c0.384 0.725 0.768 1.451 1.195 2.176s0.853 1.451 1.323 2.133c6.571 12.075 10.325 25.941 10.325 40.747s-3.755 28.672-10.368 40.789c-0.469 0.683-0.896 1.408-1.323 2.133s-0.811 1.408-1.152 2.133c-3.456 5.547-7.552 10.667-12.16 15.275-15.488 15.488-36.736 25.003-60.331 25.003s-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003c4.608 4.608 8.704 9.728 12.16 15.275zM603.733 259.755l-226.475 132.139c-0.171-0.213-0.384-0.384-0.597-0.597-30.805-30.805-73.557-49.963-120.661-49.963s-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005c0.213-0.213 0.384-0.384 0.597-0.597l226.517 132.011c-4.181 14.805-6.443 30.464-6.443 46.592 0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005c-0.128 0.128-0.299 0.299-0.427 0.427l-226.645-132.053c4.181-14.763 6.4-30.293 6.4-46.379s-2.219-31.659-6.4-46.421l226.475-132.181c0.171 0.213 0.384 0.384 0.597 0.597 30.805 30.848 73.557 50.005 120.661 50.005s89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661c0 16.085 2.219 31.659 6.4 46.421z"></path>
        </svg>
        <div className="perfil-del-producto-rating1">
          <p className="perfil-del-producto-text42">
            <span>Disguise Halo Master Chief - Casco</span>
          </p>
          <p className="perfil-del-producto-text44">
            <span>Rating</span>
          </p>
          <input
            type="text"
            placeholder="placeholder"
            className="perfil-del-producto-textinput input"
          />
          <div className="perfil-del-producto-stats">
            <div className="perfil-del-producto-stat">
              <svg
                viewBox="0 0 1152 1024"
                className="perfil-del-producto-icon1"
              >
                <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
              </svg>
              <span className="perfil-del-producto-text46">Compras</span>
              <span className="perfil-del-producto-text47">
                Clientes que han comprado este producto
              </span>
              <h1 className="perfil-del-producto-text48">540</h1>
            </div>
            <div className="perfil-del-producto-stat1">
              <svg
                viewBox="0 0 1024 1024"
                className="perfil-del-producto-icon4"
              >
                <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
              </svg>
              <span className="perfil-del-producto-text49">Envios</span>
              <span className="perfil-del-producto-text50">
                <span>Envios realizados a mas de</span>
                <br></br>
                <br></br>
              </span>
              <h1 className="perfil-del-producto-text54">245+</h1>
              <h1 className="perfil-del-producto-text55">
                <span>Dejar Tu Reseña</span>
                <br></br>
                <br></br>
              </h1>
            </div>
          </div>
          <ul className="perfil-del-producto-ul list">
            <li className="perfil-del-producto-li list-item">
              <span>
                <span className="perfil-del-producto-text60">Larry lewis</span>
                <br className="perfil-del-producto-text61"></br>
                <span>
                  It&apos;s a perfect fit. Looks like it&apos;s been in battle
                  with scars. Wears great. No nose issues. Not much wiggle room
                  on the inside and I can see through the visor. I want the rest
                  of the suit now. When I wear it and get asked to take it off
                  my response is NO. The Master Chief is never supposed to take
                  off his helmet.
                </span>
                <br></br>
              </span>
            </li>
            <li className="perfil-del-producto-li1 list-item">
              <span>
                <br></br>
                <span className="perfil-del-producto-text66">Jay Ruther</span>
                <br></br>
                <span>
                  This helmet is a little on the big side, which I love. And my
                  so loves it. Down side is we have to get some helmet pad
                  because there is not a lot of padding inside.
                </span>
              </span>
            </li>
            <li className="perfil-del-producto-li2 list-item">
              <span>
                <br></br>
                <span className="perfil-del-producto-text71">
                  Jeremy Miller
                </span>
                <br></br>
                <span>
                  Very nice looking helmet. My issues are I feel like a human
                  bobble head with this thing. They should make different sizes
                  and add extra padding to hold in place. My face is a little
                  long and so my chin hangs out the bottom. I’ll just wear my
                  ski mask to hide my chin. The lights are a nice feature.
                  Overall I’m pleased, but I wouldn’t say the product value
                  should be any higher than what I paid.
                </span>
                <br></br>
              </span>
            </li>
          </ul>
          <svg viewBox="0 0 1024 1024" className="perfil-del-producto-icon6">
            <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PerfilDelProducto
