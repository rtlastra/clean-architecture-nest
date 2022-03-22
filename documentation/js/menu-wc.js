'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">clean-architecture documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' : 'data-target="#xs-controllers-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' :
                                            'id="xs-controllers-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' : 'data-target="#xs-injectables-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' :
                                        'id="xs-injectables-links-module-AppModule-38d1abee325339438965115900dd7434b6c93ef74da59faffc059783c0505da02dd4a142cbe853ccda81804bd3dfbcdb9c32f1fb7cdc9d28f741f6d06b8f5d71"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PresentationModule.html" data-type="entity-link" >PresentationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PresentationModule-c9c338d16d15d382b569f9e1ca6992bf868a2d790bab7d194c643edbb4e4c02d817817053ef7d98054e9346d8ff9f6489ef0d74ae6218f07122977658af0a574"' : 'data-target="#xs-controllers-links-module-PresentationModule-c9c338d16d15d382b569f9e1ca6992bf868a2d790bab7d194c643edbb4e4c02d817817053ef7d98054e9346d8ff9f6489ef0d74ae6218f07122977658af0a574"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PresentationModule-c9c338d16d15d382b569f9e1ca6992bf868a2d790bab7d194c643edbb4e4c02d817817053ef7d98054e9346d8ff9f6489ef0d74ae6218f07122977658af0a574"' :
                                            'id="xs-controllers-links-module-PresentationModule-c9c338d16d15d382b569f9e1ca6992bf868a2d790bab7d194c643edbb4e4c02d817817053ef7d98054e9346d8ff9f6489ef0d74ae6218f07122977658af0a574"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RolesModule-53495d351bf5203a1dbc4a0fd1d815355cfca2aadef9b4bf34a1bba27e0ccededdb86bc1c8965971847500772432ef954e557a4947e22affa024a347b7df4f70"' : 'data-target="#xs-injectables-links-module-RolesModule-53495d351bf5203a1dbc4a0fd1d815355cfca2aadef9b4bf34a1bba27e0ccededdb86bc1c8965971847500772432ef954e557a4947e22affa024a347b7df4f70"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-53495d351bf5203a1dbc4a0fd1d815355cfca2aadef9b4bf34a1bba27e0ccededdb86bc1c8965971847500772432ef954e557a4947e22affa024a347b7df4f70"' :
                                        'id="xs-injectables-links-module-RolesModule-53495d351bf5203a1dbc4a0fd1d815355cfca2aadef9b4bf34a1bba27e0ccededdb86bc1c8965971847500772432ef954e557a4947e22affa024a347b7df4f70"' }>
                                        <li class="link">
                                            <a href="injectables/RoleRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UseCasesModule.html" data-type="entity-link" >UseCasesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UseCasesModule-52b151546d6b77c59f60e94aa0b918918b11641bcc7d26f220fbc12d0113cd42e9bf27b71dc92341551a706fd4e2716c48e8526f3f7c6595599a9f082bbdfec3"' : 'data-target="#xs-injectables-links-module-UseCasesModule-52b151546d6b77c59f60e94aa0b918918b11641bcc7d26f220fbc12d0113cd42e9bf27b71dc92341551a706fd4e2716c48e8526f3f7c6595599a9f082bbdfec3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UseCasesModule-52b151546d6b77c59f60e94aa0b918918b11641bcc7d26f220fbc12d0113cd42e9bf27b71dc92341551a706fd4e2716c48e8526f3f7c6595599a9f082bbdfec3"' :
                                        'id="xs-injectables-links-module-UseCasesModule-52b151546d6b77c59f60e94aa0b918918b11641bcc7d26f220fbc12d0113cd42e9bf27b71dc92341551a706fd4e2716c48e8526f3f7c6595599a9f082bbdfec3"' }>
                                        <li class="link">
                                            <a href="injectables/UserUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserUseCase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-4609e7aa13435d41f75b2e7f1170f8352138a0c50d5b69778ca312405e9b895eef99c79ddc25a4077db434e6475b5fa72594502cd8a78114895d5e072ab18019"' : 'data-target="#xs-injectables-links-module-UsersModule-4609e7aa13435d41f75b2e7f1170f8352138a0c50d5b69778ca312405e9b895eef99c79ddc25a4077db434e6475b5fa72594502cd8a78114895d5e072ab18019"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-4609e7aa13435d41f75b2e7f1170f8352138a0c50d5b69778ca312405e9b895eef99c79ddc25a4077db434e6475b5fa72594502cd8a78114895d5e072ab18019"' :
                                        'id="xs-injectables-links-module-UsersModule-4609e7aa13435d41f75b2e7f1170f8352138a0c50d5b69778ca312405e9b895eef99c79ddc25a4077db434e6475b5fa72594502cd8a78114895d5e072ab18019"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseRepository.html" data-type="entity-link" >BaseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});