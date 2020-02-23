import { useRouter } from 'next/router';
import { SEO, Auth } from '@components';
import Client from '@api/apiClient';

const BrandsVerifyExpired = () => {
    const router = useRouter();
        
    const resendVerificationEmail = () => {
        Client.resendVerificationEmail(router.query.token, data => {
            data && console.log(data);
            if (data.status === 200) {
                router.push('/brands/verify');
            }
        });
    };

    return(
        <>
            <SEO title="Title" description="description" />
            <Auth
            hideSideBarOnMobile
            title="Join Scizzor & Increase Your Instore Appointments"
            >
            <h3 className="mb-3 text-center mb-4 md:mb-6">Verification Token Expired</h3>
            <p className="text-center text-sm text-secondary leading-relaxed max-w-xs mx-auto">
                The verification token sent to your email address has expired. Click <span className="text-primary cursor-pointer" onClick={resendVerificationEmail}>here</span> to resend token.
            </p>
            </Auth>
        </>
    );
};

export default BrandsVerifyExpired;
