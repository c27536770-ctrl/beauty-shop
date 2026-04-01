import React, { useState } from 'react';

import styles from './index.module.scss';

const Component = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeMenu, setActiveMenu] = useState('twelve');
  const [hoveredButton, setHoveredButton] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const menuItems = [
    { id: 'eleven', icon: 'mnflnc7e-0wn1yzf.svg', label: 'Eleven' },
    { id: 'twelve', icon: 'mnflnc7e-xmneyoi.svg', label: 'Twelve' },
    { id: 'thirteen', icon: 'mnflnc7e-7hn1gjq.svg', label: 'Thirteen' },
    { id: 'fourteen', icon: 'mnflnc7e-d0qsiqy.svg', label: 'Fourteen' },
    { id: 'fifteen', icon: 'mnflnc7e-0wn1yzf.svg', label: 'Fifteen' },
    { id: 'sixteen', icon: 'mnflnc7e-xmneyoi.svg', label: 'Sixteen', badge: '99+', hasDropdown: true },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'tasks', label: 'Tasks', badge: '7' },
    { id: 'documents', label: 'Documents', badge: '2' },
    { id: 'team', label: 'Team', badge: '99+' },
    { id: 'reports', label: 'Reports' },
    { id: 'admin', label: 'Admin' },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Left Sidebar Navigation */}
      <div className={styles.desktopVerticalLogge}>
        {/* Logo */}
        <div className={styles.logo}>
          <img
            src="../image/mnflnc7e-x0ms5sb.svg"
            className={styles.iconContainer}
            alt="Logo"
          />
          <div className={styles.text}>
            <p className={styles.webbyFrames}>WebbyFrames</p>
            <p className={styles.forFigma}>for Figma</p>
          </div>
        </div>

        {/* User Buttons */}
        <div className={styles.buttonsGroup}>
          <div 
            className={styles.userThumb}
            onMouseEnter={() => setHoveredButton('user')}
            onMouseLeave={() => setHoveredButton(null)}
            role="button"
            tabIndex={0}
          >
            <img
              src="../image/mnflnc7e-tb6f33d.svg"
              className={styles.iconJamIconsOutlineL}
              alt="User"
            />
          </div>
          <div 
            className={styles.button}
            onMouseEnter={() => setHoveredButton('settings')}
            onMouseLeave={() => setHoveredButton(null)}
            role="button"
            tabIndex={0}
          >
            <img
              src="../image/mnflnc7e-05lnhes.svg"
              className={styles.iconJamIconsOutlineL}
              alt="Settings"
            />
          </div>
          <div 
            className={styles.button2}
            onMouseEnter={() => setHoveredButton('notifications')}
            onMouseLeave={() => setHoveredButton(null)}
            role="button"
            tabIndex={0}
          >
            <img
              src="../image/mnflnc7e-01cbe1k.svg"
              className={styles.iconJamIconsOutlineL}
              alt="Notifications"
            />
            <div className={styles.badge}>
              <p className={styles.text2}>9</p>
            </div>
          </div>
        </div>

        {/* Search Field */}
        <div 
          className={`${styles.field} ${searchFocused ? styles.focused : ''}`}
          onClick={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          tabIndex={0}
        >
          <img
            src="../image/mnflnc7e-kq8xuip.svg"
            className={styles.iconJamIconsOutlineL}
            alt="Search"
          />
          <p className={styles.text3}>Search for...</p>
        </div>

        {/* Menu Items */}
        <div className={styles.menu}>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={activeMenu === item.id ? styles.menuItem3 : styles.menuItem2}
              onClick={() => setActiveMenu(item.id)}
              onMouseEnter={() => setHoveredButton(`menu-${item.id}`)}
              onMouseLeave={() => setHoveredButton(null)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`../image/${item.icon}.svg`}
                className={styles.iconJamIconsOutlineL}
                alt={item.label}
              />
              <p className={styles.menuItem}>{item.label}</p>
              {item.badge && (
                <div className={styles.badge2}>
                  <p className={styles.text2}>{item.badge}</p>
                </div>
              )}
              {item.hasDropdown && (
                <img
                  src="../image/mnflnc7e-kq8xuip.svg"
                  className={styles.iconJamIconsOutlineL}
                  alt="Dropdown"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.pageContent}>
        {/* Dashboard Title */}
        <p className={styles.secondaryHeadline}>Dashboard</p>

        {/* Dashboard Tabs */}
        <div className={styles.dashboardTabs}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? styles.textContainer : styles.textContainer2}
                onClick={() => setActiveTab(tab.id)}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
              >
                <p className={activeTab === tab.id ? styles.tabText : styles.tabText2}>
                  {tab.label}
                </p>
                {tab.badge && (
                  <div className={styles.badge2}>
                    <p className={styles.text2}>{tab.badge}</p>
                  </div>
                )}
              </div>
            ))}
            <div
              className={styles.moreIcon}
              role="button"
              tabIndex={0}
              onMouseEnter={() => setHoveredButton('more')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <img
                src="../image/mnflnc7e-kq8xuip.svg"
                className={styles.iconJamIconsOutlineL}
                alt="More"
              />
            </div>
          </div>

          {/* Date Pickers */}
          <div className={styles.fields}>
            <div className={styles.field2}>
              <p className={styles.text4}>Start date</p>
              <img
                src="../image/mnflnc7e-4h5desk.svg"
                className={styles.iconJamIconsOutlineL}
                alt="Calendar"
              />
            </div>
            <div className={styles.iconContainer2}>
              <img
                src="../image/mnflnc7e-mnrtci9.svg"
                className={styles.iconJamIconsOutlineL}
                alt="Arrow"
              />
            </div>
            <div className={styles.field2}>
              <p className={styles.text4}>End date</p>
              <img
                src="../image/mnflnc7e-4h5desk.svg"
                className={styles.iconJamIconsOutlineL}
                alt="Calendar"
              />
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className={styles.row}>
          <div className={styles.text6}>
            <p className={styles.descriptionTop}>Users Total</p>
            <div className={styles.titleContainer}>
              <p className={styles.title}>11.8M</p>
              <div className={styles.badge3}>
                <p className={styles.text5}>+2,5%</p>
              </div>
            </div>
          </div>
          <div className={styles.text8}>
            <p className={styles.descriptionTop}>New Users</p>
            <div className={styles.titleContainer2}>
              <p className={styles.title}>8.236K</p>
              <div className={styles.badge4}>
                <p className={styles.text7}>-1,2%</p>
              </div>
            </div>
          </div>
          <div className={styles.text6}>
            <p className={styles.descriptionTop}>Active Users</p>
            <div className={styles.titleContainer}>
              <p className={styles.title}>2.352M</p>
              <div className={styles.badge3}>
                <p className={styles.text5}>+11%</p>
              </div>
            </div>
          </div>
          <div className={styles.text6}>
            <p className={styles.descriptionTop}>New Users</p>
            <div className={styles.titleContainer}>
              <p className={styles.title}>8K</p>
              <div className={styles.badge3}>
                <p className={styles.text5}>+5,2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className={styles.row2}>
          {/* Target Chart */}
          <div className={styles.dashboardSection}>
            <div className={styles.content}>
              <p className={styles.descriptionTop2}>Target</p>
              <div className={styles.hints}>
                <div className={styles.listItemWith}>
                  <div className={styles.iconJamIconsFilledCi}>
                    <div className={styles.vector} />
                  </div>
                  <p className={styles.descriptionTop}>Achieved</p>
                </div>
                <div className={styles.listItemWith2}>
                  <div className={styles.iconJamIconsFilledCi2}>
                    <div className={styles.vector2} />
                  </div>
                  <p className={styles.descriptionTop}>&nbsp;Remaining</p>
                </div>
              </div>
            </div>
            <div className={styles.chart}>
              <img
                src="../image/mnflnc7e-jxeet84.svg"
                className={styles.subtract}
                alt="Target achieved"
              />
              <img
                src="../image/mnflnc7e-wouhqd7.svg"
                className={styles.subtract2}
                alt="Target remaining"
              />
              <p className={styles.a67}>67%</p>
            </div>
          </div>

          {/* Most Active Account Types */}
          <div className={styles.dashboardSection2}>
            <div className={styles.content2}>
              <p className={styles.descriptionTop2}>Most Active Account Types</p>
              <div className={styles.hints2}>
                <div className={styles.listItemWith}>
                  <div className={styles.iconJamIconsFilledCi}>
                    <div className={styles.vector} />
                  </div>
                  <p className={styles.descriptionTop}>Very Active</p>
                </div>
                <div className={styles.listItemWith2}>
                  <div className={styles.iconJamIconsFilledCi2}>
                    <div className={styles.vector2} />
                  </div>
                  <p className={styles.descriptionTop}>&nbsp;Inactive</p>
                </div>
              </div>
            </div>
            <div className={styles.chartContainer}>
              <img src="../image/mnflnc7e-7n86tb0.svg" className={styles.chart2} alt="Account types chart" />
            </div>
          </div>

          {/* Active Countries */}
          <div className={styles.dashboardSection3}>
            <div className={styles.content3}>
              <p className={styles.descriptionTop2}>Active Countries</p>
              <div className={styles.hints3}>
                <div className={styles.listItemWith}>
                  <div className={styles.iconJamIconsFilledCi}>
                    <div className={styles.vector} />
                  </div>
                  <p className={styles.descriptionTop}>Very Active</p>
                </div>
                <div className={styles.listItemWith2}>
                  <div className={styles.iconJamIconsFilledCi2}>
                    <div className={styles.vector2} />
                  </div>
                  <p className={styles.descriptionTop}>&nbsp;Inactive</p>
                </div>
              </div>
            </div>
            <img src="../image/mnflnc7e-14prs4h.svg" className={styles.chart3} alt="World map" />
            <div className={styles.tooltipToogletip}>
              <div className={styles.text10}>
                <p className={styles.text9}>
                  Vel odio leo lacus, maecenas elit sagittis aliquam amet.
                </p>
              </div>
              <div className={styles.buttonsGroup2}>
                <p className={styles.buttonText}>Link Action</p>
                <div className={styles.textContainer3}>
                  <p className={styles.buttonText2}>Button</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.row3}>
          {/* Users by Country */}
          <div className={styles.dashboardSection4}>
            <p className={styles.descriptionTop3}>Users by Country</p>
            <div className={styles.listRow}>
              <div className={styles.listItemWith3}>
                <img
                  src="../image/mnflnc7e-0mtdygs.svg"
                  className={styles.iconFlagIconSet43Us}
                  alt="USA"
                />
                <p className={styles.text11}>United States</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>27.5%</p>
                <p className={styles.text13}>4.5M</p>
              </div>
            </div>
            <div className={styles.listRow}>
              <div className={styles.listItemWith3}>
                <img
                  src="../image/mnflnc7e-qzr8tal.svg"
                  className={styles.iconFlagIconSet43Us}
                  alt="Australia"
                />
                <p className={styles.text11}>Australia</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>11.2%</p>
                <p className={styles.text13}>2.3M</p>
              </div>
            </div>
            <div className={styles.listRow}>
              <div className={styles.listItemWith3}>
                <img
                  src="../image/mnflnc7e-iu1jbi8.svg"
                  className={styles.iconFlagIconSet43Us}
                  alt="China"
                />
                <p className={styles.text11}>China</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>9.4%</p>
                <p className={styles.text13}>2M</p>
              </div>
            </div>
            <div className={styles.listRow2}>
              <div className={styles.listItemWith4}>
                <div className={styles.iconFlagIconSet43De}>
                  <div className={styles.vector3} />
                  <div className={styles.vector4} />
                  <div className={styles.vector5} />
                </div>
                <p className={styles.text11}>Germany</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>8%</p>
                <p className={styles.text13}>1.7M</p>
              </div>
            </div>
            <div className={styles.listRow3}>
              <div className={styles.listItemWith5}>
                <div className={styles.group}>
                  <div className={styles.autoWrapper}>
                    <div className={styles.vector6} />
                    <div className={styles.vector7} />
                  </div>
                  <div className={styles.vector8} />
                </div>
                <p className={styles.text11}>Romania</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>7.9%</p>
                <p className={styles.text13}>1.6M</p>
              </div>
            </div>
            <div className={styles.listRow4}>
              <div className={styles.listItemWith6}>
                <div className={styles.iconFlagIconSet43Jp}>
                  <div className={styles.vector10}>
                    <div className={styles.vector9} />
                  </div>
                </div>
                <p className={styles.text11}>Japan</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>6.1%</p>
                <p className={styles.text13}>1.2M</p>
              </div>
            </div>
            <div className={styles.listRow5}>
              <div className={styles.listItemWith7}>
                <div className={styles.vector13}>
                  <div className={styles.vector12}>
                    <div className={styles.vector11} />
                  </div>
                </div>
                <p className={styles.text11}>Netherlands</p>
              </div>
              <div className={styles.right}>
                <p className={styles.text12}>5.9%</p>
                <p className={styles.text13}>1M</p>
              </div>
            </div>
          </div>

          {/* Top 5 Best Selling Users */}
          <div className={styles.dashboardSection5}>
            <p className={styles.descriptionTop3}>Top 5 Best Selling Users</p>
            <div className={styles.content4}>
              <img src="../image/mnflnc7e-ilggb1t.svg" className={styles.chart2} alt="Top users chart" />
              <div className={styles.right4}>
                <div className={styles.listRow6}>
                  <div className={styles.listItemWith8}>
                    <div className={styles.iconJamIconsFilledCi}>
                      <div className={styles.vector} />
                    </div>
                    <p className={styles.text11}>User Name</p>
                  </div>
                  <div className={styles.right2}>
                    <p className={styles.text13}>$1.2M</p>
                    <div className={styles.badge5}>
                      <p className={styles.text5}>+8,2%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.listRow7}>
                  <div className={styles.listItemWith9}>
                    <div className={styles.iconJamIconsFilledCi3}>
                      <div className={styles.vector14} />
                    </div>
                    <p className={styles.text11}>User Name</p>
                  </div>
                  <div className={styles.right2}>
                    <p className={styles.text13}>$800K</p>
                    <div className={styles.badge5}>
                      <p className={styles.text5}>+7%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.listRow8}>
                  <div className={styles.listItemWith10}>
                    <div className={styles.iconJamIconsFilledCi4}>
                      <div className={styles.vector15} />
                    </div>
                    <p className={styles.text11}>User Name</p>
                  </div>
                  <div className={styles.right2}>
                    <p className={styles.text13}>$645K</p>
                    <div className={styles.badge5}>
                      <p className={styles.text5}>+2,5%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.listRow9}>
                  <div className={styles.listItemWith11}>
                    <div className={styles.iconJamIconsFilledCi5}>
                      <div className={styles.vector16} />
                    </div>
                    <p className={styles.text11}>User Name</p>
                  </div>
                  <div className={styles.right3}>
                    <p className={styles.text13}>$590K</p>
                    <div className={styles.badge6}>
                      <p className={styles.text7}>-6,5%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.listRow10}>
                  <div className={styles.listItemWith12}>
                    <div className={styles.iconJamIconsFilledCi2}>
                      <div className={styles.vector2} />
                    </div>
                    <p className={styles.text11}>User Name</p>
                  </div>
                  <div className={styles.right2}>
                    <p className={styles.text13}>$342K</p>
                    <div className={styles.badge5}>
                      <p className={styles.text5}>+1,7%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
