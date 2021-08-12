import "./App.css";
import Modal from "./components/modal";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Modal
          buttonTitle="Select Colors"
          title="Select Color"
          id="modal1"
          color="#3F51B5"
          buttonTextColor="#fff"
        >
          <div className="buttons">
            <Modal
              buttonTitle="Select Dark Colors"
              title="Dark Colors"
              id="modal2"
              color="#263238"
              buttonTextColor="#fff"
            >
              <div className="buttons">
                <Modal
                  buttonTitle="Select Dark Colors"
                  title="Dark Colors"
                  id="modal22"
                  color="#424242"
                  buttonTextColor="#fff"
                >
                  <h1>424242</h1>
                </Modal>
                <Modal
                  buttonTitle="Select Dark Colors"
                  title="Dark Colors"
                  id="modal23"
                  color="#3E2723"
                  buttonTextColor="#fff"
                >
                  <h1>3E2723</h1>
                </Modal>
                <Modal
                  buttonTitle="Select Dark Colors"
                  title="Dark Colors"
                  id="modal24"
                  color="#004D40"
                  buttonTextColor="#fff"
                >
                  <h1>004D40</h1>
                </Modal>
              </div>
            </Modal>
            <Modal
              buttonTitle="Select light Colors"
              title="light Colors"
              id="modal3"
              color="#E0E0E0"
              buttonTextColor="#000"
            >
              <div className="buttons">
                <Modal
                  buttonTitle="Select light Colors"
                  title="light Colors"
                  id="modal32"
                  color="#FFECB3"
                  buttonTextColor="#000"
                >
                  <h1>FFECB3</h1>
                </Modal>
                <Modal
                  buttonTitle="Select light Colors"
                  title="light Colors"
                  id="modal33"
                  color="#F0F4C3"
                  buttonTextColor="#000"
                >
                  <h1>F0F4C3</h1>
                </Modal>
                <Modal
                  buttonTitle="Select light Colors"
                  title="light Colors"
                  id="modal34"
                  color="#FCE4EC"
                  buttonTextColor="#000"
                >
                  <h1>FCE4EC</h1>
                </Modal>
              </div>
            </Modal>
            <Modal
              buttonTitle="Select other Colors"
              title="other Colors"
              id="modal4"
              color="#AD1457"
              buttonTextColor="#fff"
            >
              <div className="buttons">
                <Modal
                  buttonTitle="Select other Colors"
                  title="other Colors"
                  id="modal42"
                  color="#43A047"
                  buttonTextColor="#fff"
                >
                  <h1>43A047</h1>
                </Modal>
                <Modal
                  buttonTitle="Select other Colors"
                  title="other Colors"
                  id="modal43"
                  color="#EC407A"
                  buttonTextColor="#fff"
                >
                  <h1>EC407A</h1>
                </Modal>
                <Modal
                  buttonTitle="Select other Colors"
                  title="other Colors"
                  id="modal44"
                  color="#FFA726"
                  buttonTextColor="#fff"
                >
                  <h1>FFA726</h1>
                </Modal>
              </div>
            </Modal>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
