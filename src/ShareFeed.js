import React from "react";
import "./iii.css";
const ShareFeed = () => {
  return (
    <div className="share-feed-container">
      <div className="share-feed-card">
        <div className="d-flex mb-3">
          <div className="avatar-container">
            <a href="#">
              <img
                className="avatar-img rounded-circle"
                src="https://social.webestica.com/assets/images/avatar/03.jpg"
                alt=""
              />
            </a>
          </div>
          <form className="post-input-form">
            <textarea
              className="form-control border-0"
              rows="3"
              placeholder="Share your thoughts..."
            ></textarea>
          </form>
        </div>

        <ul className="share-feed-toolbar">
          <li>
            <a href="#" className="feed-link">
              <i className="icon icon-image"></i>Photo
            </a>
          </li>
          <li>
            <a href="#" className="feed-link">
              <i className="icon icon-camera"></i>Video
            </a>
          </li>
          <li>
            <a href="#" className="feed-link">
              <i className="icon icon-calendar"></i>Event
            </a>
          </li>
          <li>
            <a href="#" className="feed-link">
              <i className="icon icon-emoji"></i>Feeling / Activity
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="feed-link" id="feedActionShare">
              <i className="icon icon-dots"></i>
            </a>
          </li>
        </ul>

        {/* Modal for uploading photo */}
        <div className="modal" id="feedActionPhoto">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Upload Photo</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="photoInput" className="form-label">
                      Choose a photo:
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="photoInput"
                      accept="image/*"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareFeed;
