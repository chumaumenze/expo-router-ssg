import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useREM } from 'react-native-web-hooks';

import { BlurView } from 'expo-blur';
import { H2, P } from '../components/Elements';
import SEO from '../components/SEO';
import SocialIcon from '../components/SocialIcon';
import UniversalLink from '../components/UniversalLink';
import CustomAppearanceContext from '../context/CustomAppearanceContext';
import { Lego } from '../Data';
function ProjectCard({
  title,
  group,
  icon,
  color,
  gallery,
  preview,
  url,
  source,
  thumbnail,
  description,
  presentedData = [],
  resourcesData = [],
}) {
  const { isDark } = React.useContext(CustomAppearanceContext);

  const socials = [
    gallery && {
      icon: 'photo',
      name: 'Photos',
      url: gallery,
    },
  ].filter(Boolean);

  const themeColor = color || (isDark ? 'black' : 'white');
  return (
    <View
      accessibilityRole="summary"
      style={{
        maxWidth: 720,
        borderRadius: 12,
        overflow: 'hidden',
        flex: 1,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.5,
        shadowOffset: { height: 4, width: 0 },
        marginBottom: 36,
        backgroundColor: themeColor,
      }}
    >
      <ImageBackground
        source={preview}
        style={[
          {
            flex: 1,

            paddingHorizontal: 8,
            minHeight: 360,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
        resizeMode="cover"
      >
        <BlurView
          tint="dark"
          accessibilityRole="footer"
          style={{
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-between',
            left: 0,
            paddingHorizontal: 16,
            paddingVertical: 12,
            right: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View>
            {title && (
              <H2
                style={{
                  color: 'white',

                  marginBottom: 0,
                  fontSize: useREM(1.51572),
                }}
              >
                {title}
              </H2>
            )}
            {group && (
              <P style={{ marginTop: 4, color: 'white', marginBottom: 0 }}>
                {group}
              </P>
            )}
          </View>
          {socials.map(social => (
            <UniversalLink
              style={{ marginRight: 8 }}
              target="_blank"
              key={social.name}
              routeName={social.url}
            >
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 20,
                  backgroundColor: 'white',
                }}
              >
                <SocialIcon name={social.icon} color="black" size={16} />
                <P
                  style={{
                    marginLeft: 6,
                    fontSize: useREM(1),
                    marginTop: 0,
                    marginBottom: 0,
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {social.name.toUpperCase()}
                </P>
              </View>
            </UniversalLink>
          ))}
        </BlurView>
      </ImageBackground>
    </View>
  );
}

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Lego"
        description="Extremely awesome Lego sculptures by World's Youngest Lego Master Builder Evan Bacon"
      />
      <H2>Lego</H2>
      {Lego.map((project: any) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </>
  );
};

export default IndexPage;
