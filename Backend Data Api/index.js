@tailwind base;
@tailwind components;
@tailwind utilities;

/*    */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #fff;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  /*   border-bottom: 1px solid rgb(200, 200, 200); */
}

.logo {
  height: 140px;
  width: 180px;
}

.logo:hover {
  cursor: pointer;
}

.search-bar {
  display: flex;
}

.search-input {
  outline: none;
  background-color: rgb(235, 235, 235);
  border: none;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  height: 3rem;
  width: 17rem;
  text-indent: 20px;
  font-size: 15px;
}

.search-btn {
  position: relative;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(200, 200, 200);
  border-left: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 3rem;
  height: 3rem;
  border: none;
}

.search-btn:hover {
  background-color: rgb(220, 220, 220);
  cursor: pointer;
}

.search-btn::before {
  content: "";
  height: 70%;
  width: 1px;
  position: absolute;
  right: 100%;
  top: 15%;
  background-color: rgb(200, 200, 200);
}

.search-btn > i {
  color: rgb(180, 180, 180);
}

.nav-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  margin-right: 4rem;
}

.upload-btn {
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
}

.upload-btn:hover {
  text-decoration: underline;
  cursor: pointer;
}

.login-btn {
  height: 2.3rem;
  width: 6rem;
  color: #fff;
  background-color: rgb(254, 44, 85);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
}

.login-btn:hover {
  background-color: rgb(233, 37, 76);
  cursor: pointer;
}

.drop-down {
  background-color: transparent;
  border: none;
  position: relative;
}

.drop-down:hover {
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 200%;
  right: 0;
  background-color: #fff;
  width: 14rem;
  border-radius: 5px;
  box-shadow: 5px 3px 5px 5px rgba(0, 0, 0, 0.097);
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  height: 100%;
}

li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding-top: 0.5rem;
  height: 2.5rem;
  width: 100%;
}

li:hover {
  background-color: rgb(245, 245, 245);
}

li > a {
  