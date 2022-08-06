'use babel';

import LinkSlotGacorTerbaruMudahMenangFreespinView from './link-slot-gacor-terbaru-mudah-menang-freespin-view';
import { CompositeDisposable } from 'atom';

export default {

  linkSlotGacorTerbaruMudahMenangFreespinView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linkSlotGacorTerbaruMudahMenangFreespinView = new LinkSlotGacorTerbaruMudahMenangFreespinView(state.linkSlotGacorTerbaruMudahMenangFreespinViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linkSlotGacorTerbaruMudahMenangFreespinView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'link-slot-gacor-terbaru-mudah-menang-freespin:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linkSlotGacorTerbaruMudahMenangFreespinView.destroy();
  },

  serialize() {
    return {
      linkSlotGacorTerbaruMudahMenangFreespinViewState: this.linkSlotGacorTerbaruMudahMenangFreespinView.serialize()
    };
  },

  toggle() {
    console.log('LinkSlotGacorTerbaruMudahMenangFreespin was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
