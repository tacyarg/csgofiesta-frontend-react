import React from 'react'
import { Flex, Box, Heading } from 'rebass'
import { FaTimes } from 'react-icons/fa'

import PrimaryButton from './PrimaryButton'

const Overlay = props => (
  <Flex
    onClick={props.onClick}
    css={{
      left: 0,
      top: 0,
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      zIndex: 9999,
      backgroundColor: 'rgba(0,0,0,0.5)',
    }}
    justifyContent="center"
    alignItems="center"
  >
    <Box>{props.children}</Box>
  </Flex>
)

class DepositModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      canClose: true,
    }
  }

  componentDidUpdate(oldProps) {
    const { show } = this.state
    if (oldProps.show !== this.props.show) {
      console.log('should close')
      this.setState({ show: !show, canClose: true })
    }
  }

  toggleShow = () => {
    const { show, canClose } = this.state
    if (!canClose) return
    this.setState({ show: !show, canClose: true })
  }

  toggleCanClose = () => {
    this.setState({ canClose: !this.state.canClose })
  }

  render() {
    const { show } = this.state
    const { children, title = 'Modal', buttonText = 'Open' } = this.props
    return (
      <Flex>
        {show ? (
          <Overlay onClick={this.toggleShow}>
            <Flex
              onMouseEnter={this.toggleCanClose}
              onMouseLeave={this.toggleCanClose}
              backgroundColor="#221d2e"
              // p={4}
              css={{
                zIndex: 99999,
                width: '50vw',
                height: '50vh',
                boxShadow: '1px 2px 1px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(0, 0, 0, 0.25)',
                minWidth: '20vw',
                minHeight: '20vh',
                borderRadius: 5,
              }}
              flexDirection="column"
            >
              <Flex
                p={3}
                width={1}
                alignItems="center"
                backgroundColor="rgba(27, 23, 37, 0.5)"
                css={{ borderBottom: '1px solid rgba(0, 0, 0, 0.25)' }}
              >
                <Heading fontWeight="bold">{title}</Heading>
                <Box mx="auto" />
                <Box as={FaTimes} cursor="pointer" onClick={this.toggleShow} />
              </Flex>
              {children}
            </Flex>
          </Overlay>
        ) : null}
        <PrimaryButton loading={show} onClick={this.toggleShow}>
          {buttonText}
        </PrimaryButton>
      </Flex>
    )
  }
}

export default DepositModal
