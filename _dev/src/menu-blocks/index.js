import * as MenuSection from './menu-section';
import * as MenuSectionHeading from './menu-section-heading';
import * as MenuSectionColumn from './menu-section-column';
import * as MenuItem from './menu-item';

const { __ } = wp.i18n;
const { registerPlugin } = wp.plugins
const { PluginDocumentSettingPanel } = wp.editPost
const { RadioControl, TextControl } = wp.components;

const DiningDashboardMenuMeta = () => {
    let value = wp.data.select('core/editor').getEditedPostAttribute('meta');
    //.getEditedPostAttribute('meta')['_post_title_width'];
    console.log(value);
    //https://css-tricks.com/managing-wordpress-metadata-in-gutenberg-using-a-sidebar-plugin/
    return (
        <PluginDocumentSettingPanel
            name="menu-meta"
            title="Menu Title Width"
            initialOpen={true}
        >
            <RadioControl
                label={__('Max Width')}
                options={
                    [
                        { label: '100%', value: 'full' },
                        { label: '1500px', value: 'wider' },
                        { label: '1200px', value: 'wide' },
                        { label: '600px', value: 'narrow' },
                    ]
                }
            />
            <TextControl
                value={value}
                label={__("Text Meta", "textdomain")}
                onChange={(value) => wp.data.dispatch('core/editor').editPost({ meta: { _menu_title_width: value } })}
            />
        </PluginDocumentSettingPanel>
    )
}

registerPlugin(
    'dining-dashboard-menu-meta', 
    {
        render: DiningDashboardMenuMeta
    }
)