import {Session} from 'extreme-startup-core/lib/common/interfaces/session.interface';
import {ExtremeStartupGameSession} from './extreme-startup-game.session';

describe('ExtremeStartupGameSession', () => {
  it('can be created', () => {
    const session: Session = new ExtremeStartupGameSession();
  });
});
