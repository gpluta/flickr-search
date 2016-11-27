import Ember from 'ember';

export default Ember.Service.extend({
  /**
   * Render a modal
   * @param {String} imageUrl - an url of the image to be rendered
   */
  showModal(imageUrl) {
    let anchor;
    $('body').append(`<div id="modal-anchor"></div>`)
    anchor = $('#modal-anchor');

    // Generate modal content
    anchor.html(`
<div class="modal-blanket">
  <div class="modal-content">
    <div class="modal-header">
      <span id="closeModal">CLOSE <small>[esc]</small></span>
    </div>
    <div class="content-image">
      <img src="${imageUrl}" alt="">
    </div>
  </div>
</div>
    `);

    // Add event listeners
    $('.modal-blanket').on('click.modalDialog', e => {
      if ($(e.target).hasClass('modal-blanket')) {
        this.destroyModal();
      }
    });

    $('#closeModal').on('click.modalDialog', this.destroyModal);

    $(document).on('keyup.modalDialog', e => {
      if (e.keyCode === 27) {
        this.destroyModal();
      }
    })
  },

  /**
   * Destroy the modal, along with the attached event listeners
   */
  destroyModal() {
    if ($('#modal-anchor').length) {
      // Remove event listeners
      $('.modal-blanket').off('.modalDialog');
      $(document).off('.modalDialog');
      $('#closeModal').off('.modalDialog')

      //Remove dom nodes
      $('#modal-anchor').remove();
    }
  }
});
