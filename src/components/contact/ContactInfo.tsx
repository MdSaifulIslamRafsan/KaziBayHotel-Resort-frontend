import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const ContactInfo = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">
                Get In Touch
            </h2>

            <p className="text-foreground/70 mb-10">
               {` We'd`} love to hear from you. Feel free to
                contact us anytime.
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <Phone className="text-primary" />
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-foreground/70">
                            +880 1234-567890
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Mail className="text-primary" />
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-foreground/70">
                            contact@luxestay.com
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <MapPin className="text-primary" />
                    <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-foreground/70">
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;