import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Grid, Link } from '@theme-ui/components'

const PremiumSponsors = () => (
  <Grid
    gap={[4, null, null, 6]}
    columns={[1, null, null, 2]}
    sx={{ justifyItems: ['flex-start', null, null, 'stretch'] }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/5580297?s=64"
        alt="Tanner Linsley"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://tanstack.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        💍 Tanner Linsley
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/reactbricks.svg"
        alt="React Bricks"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://reactbricks.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🥉 React Bricks
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/109633172?s=64"
        alt="wagmi"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://wagmi.sh/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🥉 wagmi
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/meow.svg"
        alt="Meow Sales Funnel"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://www.sales-funnel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🐱 Meow Sales Funnel
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/workflowgen.png"
        alt="WorkflowGen"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://www.workflowgen.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🥳 WorkflowGen
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/41463883?s=64"
        alt="daily.dev"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://daily.dev/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🥳 daily.dev
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/8204858?s=64"
        alt="Jonas Daniels"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://github.com/jnsdls"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🥳 Jonas Daniels
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/monolisa.jpeg"
        alt="MonoLisa"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://www.monolisa.dev/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '1.5rem',
        }}
      >
        🥳 MonoLisa
      </Link>
    </div>
  </Grid>
)

export default PremiumSponsors
