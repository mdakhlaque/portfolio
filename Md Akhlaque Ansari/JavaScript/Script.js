
// ========== responsive nab-bar =================

 let navBar = document.querySelector('#nav-bar');
 let cancel = document.querySelector('#cancel')
 let leftContainer = document.querySelector('#profile-container');

          function profileShow () {
                    navBar.addEventListener('click', function () {
                              leftContainer.classList.add('show-profile');
                     })
          }
          profileShow();

          function profileCancel () {
                    cancel.addEventListener('click', function () {
                              leftContainer.classList.remove('show-profile');
                     })
          }

          profileCancel();

// ============= responsive nab-bar close ========================

