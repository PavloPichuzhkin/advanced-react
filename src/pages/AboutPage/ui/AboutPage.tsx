import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line project-fsd-architecture/layer-imports
import { ThrowErrorButton } from '@/app/providers/ErrorBoundary/ui/ThrowErrorButton';
import { Counter } from '@/widgets/Counter';
import { CounterEntity } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppText } from '@/shared/ui/redesigned/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawers';
import {
    fetchRandomQuote,
    GetQuoteResponseDto,
} from '@/shared/lib/getRandomQuote/getRandomQuote';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const [test, setTest] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onModalClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    const onModalOpen = useCallback(() => {
        setIsModalOpen(true);
    }, []);
    const onDrawerClose = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);
    const onDrawerOpen = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const [quote, setQuote] = useState<GetQuoteResponseDto | undefined>(
        undefined,
    );

    const onGetRandomQuote = () => {
        // getRandomQuote()
        //     .then((response) => {
        //         //  when server response quoteText string have \ symbol, then quoteText somehow makes undefined, example below
        //         eslint-disable-next-line max-len
        //         // {"quoteText":"It\'s easier to see the mistakes on someone else\'s paper.", "quoteAuthor":"", "senderName":"", "senderLink":"", "quoteLink":"http://forismatic.com/en/3f66e94c2b/"}
        //
        //         console.log(111111, response);
        //         if (typeof response === 'string') {
        //              eslint-disable-next-line max-len
        //             // '{"quoteText":"If the only prayer you ever say in your entire life is "thank you", it will be enough. ", "quoteAuthor":"Meister Eckhardt", "senderName":"", "senderLink":"", "quoteLink":"http://forismatic.com/en/3b2db37c13/"}'
        //             // if (response.match(/`/g)) {
        //             //     response.replace(/`/g, "'");
        //             //
        //             //     // // let responseJSON = JSON.stringify(response);
        //             //     // const responseJSON = response.replace(/\\\\'/g, '\u2019');
        //             //     console.log(222222, response);
        //             // }
        //             // response = JSON.parse(response);
        //             console.log(222222, response[0]);
        //         }
        //
        //         // response.quoteText="You are doomed to make choices. This is life\'s greatest paradox."
        //
        //         // setQuote(() => response);
        //     })
        fetchRandomQuote<GetQuoteResponseDto>(
            'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
        )
            .then((response) => {
                console.log(111111, response);
                setQuote(() => response);
            })
            .catch((e) => {
                console.log('Some Error:', e);
            });
    };
    console.log('quoteText', quote?.quoteText!);

    return (
        <Page data-testid='AboutPage'>
            <div>{t('About Page')}</div>
            <div>{t('description.part1')}</div>
            {/* <button type="button" onClick={() => setTest((t) => t + 1)}>Test</button> */}
            <ThrowErrorButton />
            <Counter />
            <CounterEntity />
            <Button onClick={onModalOpen}>{t('Open Modal')}</Button>
            <Button onClick={onDrawerOpen}>{t('Open Drawer')}</Button>
            <Button onClick={onGetRandomQuote}>{t('Open Drawer')}</Button>
            <AppText text={quote?.quoteText} />
            {/* {isModalOpen && ( */}
            {/* <ModalNew isOpen={isModalOpen} onClose={onModalClose} lazy> */}
            {/*    <AppText */}
            {/*        title={t( */}
            {/*            'This is a new easier variant of ModalDeprecated UI component', */}
            {/*        )} */}
            {/*    /> */}
            {/* </ModalNew> */}
            {/* )} */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={onModalClose}>
                    <AppText
                        title={t(
                            'This is a new easier variant of Modal UI component',
                        )}
                    />
                </Modal>
            )}
            {isDrawerOpen && (
                <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                    <AppText
                        title={t(
                            'This is a new easier variant of Modal UI component',
                        )}
                    />
                </Drawer>
            )}
        </Page>
    );
};

export default memo(AboutPage);
