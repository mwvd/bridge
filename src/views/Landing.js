import React from 'react';
import { H1, P } from 'indigo-react';

import { useHistory } from '../store/history';
import useImpliedPoint from 'lib/useImpliedPoint';
import useImpliedTicket from 'lib/useImpliedTicket';

import View from 'components/View';
import { ForwardButton } from 'components/Buttons';

function Landing() {
  const { push, names } = useHistory();

  const impliedPoint = useImpliedPoint();
  const impliedTicket = useImpliedTicket();
  if (impliedPoint) {
    push(names.LOGIN);
  } else if (impliedTicket) {
    push(names.ACTIVATE);
  }

  return (
    <View>
      <H1>Welcome</H1>

      <P>
        Bridge is a tool for managing and viewing assets on Azimuth, the Urbit
        address space.
      </P>

      <ForwardButton
        className="mt3"
        detail="If you were sent an Azimuth invite code."
        onClick={() => push(names.ACTIVATE)}>
        Activate a Point
      </ForwardButton>

      <ForwardButton
        className="mt3"
        detail="Login to an activated point."
        onClick={() => push(names.LOGIN)}>
        Login
      </ForwardButton>

      <ForwardButton
        className="mt3"
        detail="View an Azimuth point without signing into a wallet."
        onClick={() => push(names.VIEW_POINT)}>
        View a Point
      </ForwardButton>
    </View>
  );
}

export default Landing;